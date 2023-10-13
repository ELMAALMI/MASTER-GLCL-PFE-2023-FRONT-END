import axios from 'axios';
import { ErrorAlert } from './alerts';

export const httpErrorHandler = (error: any) => {
    if (error === null) throw new Error('Unrecoverable error!! Error is null!');
    if (axios.isAxiosError(error)) {
        //here we have a type guard check, error inside this if will be treated as AxiosError
        const response = error?.response;
        const request = error?.request;
        const config = error?.config; //here we have access the config used to make the api call (we can make a retry using this conf)
        if (error.code === 'ERR_NETWORK') {
            ErrorAlert('Connection Error', 'check you connection and try again');
            console.log('connection problems..');
        } else if (error.code === 'ERR_CANCELED') {
            console.log('connection canceled..');
            ErrorAlert('Connection Error', 'check you connection and try again');
        }
        if (response) {
            //The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
            const statusCode = response?.status;
            if (statusCode === 404) {
                console.log('The requested resource does not exist or has been deleted');
            } else if (statusCode === 400) {
                ErrorAlert(
                    '',
                    response.data.errors.map((item: string) => item)
                );

                console.log('Please login to access this resource');
                //redirect user to login
            }
        } else if (request) {
            //The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
        }
    }
    console.log(error.message);
};
