
import { AxiosResponse } from "axios";
export interface AxiosResult extends AxiosResponse<any> {
    data: any;
    statusCode: number;
}