
import * as HttpRequest from '../../axios-requester/http-requester';
export const submitForm = async (data: any) => {
   const reply = await HttpRequest.makePostRequest('/become-seller', data, {});
}