"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom_response = exports.bad_response = exports.error_response = exports.good_response = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_status_1 = require("../enums/response_status");
const response_structure = ({ data, code, status }) => {
    return { DATA: data, CODE: code, STATUS: status };
};
const good_response = ({ data }) => {
    const STATUS = response_status_1.API_STATUS.OK;
    const CODE = http_status_codes_1.StatusCodes.OK;
    return response_structure({
        data: data,
        status: STATUS,
        code: CODE,
    });
};
exports.good_response = good_response;
const error_response = ({ data }) => {
    const STATUS = response_status_1.API_STATUS.FAILED;
    const CODE = http_status_codes_1.StatusCodes.BAD_REQUEST;
    return response_structure({
        data: data,
        status: STATUS,
        code: CODE,
    });
};
exports.error_response = error_response;
const bad_response = ({ data }) => {
    const STATUS = response_status_1.API_STATUS.FAILED;
    const CODE = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    return response_structure({
        data: data,
        status: STATUS,
        code: CODE,
    });
};
exports.bad_response = bad_response;
const custom_response = ({ data, code, status, }) => {
    return response_structure({
        data: data,
        status: status,
        code: code,
    });
};
exports.custom_response = custom_response;
