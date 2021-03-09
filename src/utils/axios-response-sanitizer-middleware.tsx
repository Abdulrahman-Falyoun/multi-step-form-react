import { AxiosResponse } from "axios";



export const axiosResponseSanitizerMiddleware = (reply: AxiosResponse<any>) => {
    if (reply && reply.data) return { data: reply.data, statusCode: reply.status };
    return null;
}