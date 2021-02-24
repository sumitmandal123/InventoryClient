import axios from 'axios'
import { baseUrl } from "../utils/constants/urlConstan";
import { toast } from "react-toastify";
import { Update } from '@material-ui/icons';

export function get(url) {
    let result = {}
    let error = {}
    result = axios.get(baseUrl + url)
        .then(
            res => {
                result = res;
                if (res != null && res != undefined && res.data.success) {
                    return res.data;
                }
                else {
                    toast.error(res.error);
                }
            }
        ).catch(err => {

            error = err
            toast.error("Error while getting data");
        })

    return result

}


export function addNewData(url, data, message) {
    let result = {}
    let error = {}
    result = axios.post(baseUrl + url, data)
        .then(
            res => {
                result = res;
                if (res != null && res != undefined && res.data.success) {
                    message ? toast.info(message) : toast.info('data Added sucessfully')
                    return res.data;
                }
                else {
                    toast.error(res.error);
                }
            }
        ).catch(err => {

            error = err
            toast.error("Error while getting data");
        })

    return result
}





