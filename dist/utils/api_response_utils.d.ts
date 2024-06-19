import { StatusCodes } from "http-status-codes";
import { DataResponse, ErrorParams, ResponseParams } from "../types/api_response";
import { API_STATUS } from "../enums/response_status";
export declare const good_response: ({ data }: ResponseParams) => {
    DATA: DataResponse;
    CODE: StatusCodes;
    STATUS: API_STATUS;
};
export declare const error_response: ({ data }: ErrorParams) => {
    DATA: DataResponse;
    CODE: StatusCodes;
    STATUS: API_STATUS;
};
export declare const bad_response: ({ data }: ErrorParams) => {
    DATA: DataResponse;
    CODE: StatusCodes;
    STATUS: API_STATUS;
};
export declare const custom_response: ({ data, code, status, }: {
    data: DataResponse;
    code: StatusCodes;
    status: API_STATUS;
}) => {
    DATA: DataResponse;
    CODE: StatusCodes;
    STATUS: API_STATUS;
};
//# sourceMappingURL=api_response_utils.d.ts.map