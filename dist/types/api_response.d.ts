import { StatusCodes } from "http-status-codes";
import { API_STATUS } from "../enums/response_status";

export type ErrorResponse = {
  data?: object;
  message?: string;
  error?: any;
};

export type GoodResponse = object;
export type DataResponse = ErrorResponse | GoodResponse;

export type API_RESPONSE = {
  data: DataResponse;
  code: StatusCodes;
  status: API_STATUS;
  message?: String;
};

export type ErrorParams = {
  data: ErrorResponse;
  message?: string;
};

export type ResponseParams = {
  data: object;
  message?: string;
};
