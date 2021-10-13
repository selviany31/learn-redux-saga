import axios from "axios";

export function requestGetData() {
    return axios.request({
        method: 'get',
        url: 'https://api.chucknorris.io/jokes/random'
    })
}