import * as React from "react";
import { render } from "react-dom";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import PDFLink from "./PDFLink";

import "./styles.css";

//This is the way
const MyDoc = () => (
  <Document>
    <Page>
      <Text>Please! get the fuck out.</Text>
    </Page>
  </Document>
);

function App() {
  return (
    <div>
      <div className="App">
        <PDFLink />
      </div>
      <div>
        <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <button
                style={{
                  border: "none",
                  backgroundColor: "orange",
                  cursor: "pointer",
                  borderRadius: "5px"
                }}
              >
                Download now!
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
