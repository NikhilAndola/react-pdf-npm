import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faFile } from "@fortawesome/free-solid-svg-icons";

import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";

import { ApiResponse, ApiData } from "./interfaces";

const PDFLink: React.FC = () => {
  const { useState } = React;

  const initialData: Array<ApiData> | undefined = undefined;

  const [error, setError] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [data, setData] = useState(initialData);
  const [attempts, setAttempts] = useState(0);

  const requestDataUrl = "https://randomuser.me/api/?results=1&inc=name,email";

  const fetchData = () => {
    setRequesting(true);
    fetch(requestDataUrl)
      .then(res => res.json())
      .then((resData: ApiResponse) => {
        setData(resData.results);
        setRequesting(false);
      })
      .catch(e => {
        setError(true);
        setRequesting(false);
        setAttempts(attempts + 1);
        console.error(e);
      });
  };

  return (
    <p>
      {!requesting && !data && !error && (
        <span className="clickable" onClick={() => fetchData()}>
          - Request this document <FontAwesomeIcon icon={faFile} />
        </span>
      )}
      {requesting && (
        <span>
          <FontAwesomeIcon icon={faSpinner} spin /> retrieving document...
        </span>
      )}
      {data && !requesting && !error && (
        <PdfDocument
          title="Cost Disclosure Document"
          document={<TestDocument data={data} />}
        />
      )}
      {!requesting && error && (
        <>
          <span>There has been an error. </span>
          {attempts < 3 ? (
            <span className="clickable" onClick={() => fetchData()}>
              Please try again.
            </span>
          ) : (
            <span>Please try again later.</span>
          )}
        </>
      )}
    </p>
  );
};

export default PDFLink;
