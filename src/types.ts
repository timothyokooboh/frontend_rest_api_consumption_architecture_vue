import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type APIEndpointConfig = Omit<
    AxiosRequestConfig, 
    "method" | "data" | "params"
>;

type Payload = {
  [key: string]: unknown;
};

type APIPayload = {
  data: Payload;
};

type OptionalAPIPayload = Partial<APIPayload>;

export interface GETAPIEndpoint extends APIEndpointConfig {
  method: "GET";
  params?: Payload;
}

export interface POSTAPIEndpoint extends APIEndpointConfig, APIPayload {
  method: "POST";
}

export interface PATCHAPIEndpoint extends APIEndpointConfig, APIPayload {
  method: "PATCH";
}

export interface PUTAPIEndpoint extends APIEndpointConfig, APIPayload {
  method: "PUT";
}

export interface DELETEAPIEndpoint extends APIEndpointConfig, OptionalAPIPayload {
  method: "DELETE";
}

type APIEndpoint =
  | GETAPIEndpoint
  | POSTAPIEndpoint
  | PUTAPIEndpoint
  | PATCHAPIEndpoint
  | DELETEAPIEndpoint;

export type APIError = AxiosError | null
export type APIResponse = AxiosResponse | null

export default APIEndpoint;
