
import * as HttpRequest from '../../axios-requester/http-requester';
export const submitForm = (data: any) => {
    HttpRequest.makePostRequest('/become-seller', data, {});
}