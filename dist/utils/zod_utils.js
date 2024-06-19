"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detect_zod_error = void 0;
const zod_1 = require("zod");
const get_zod_error = ({ error }) => {
    return error.issues[0].message;
};
const detect_zod_error = ({ error }) => {
    if (error instanceof zod_1.ZodError) {
        const zodError = get_zod_error({ error });
        return { error: zodError };
    }
    return null;
};
exports.detect_zod_error = detect_zod_error;
