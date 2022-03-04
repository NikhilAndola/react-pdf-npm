export interface ApiData {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}

export interface ApiResponse {
  results: Array<ApiData>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
