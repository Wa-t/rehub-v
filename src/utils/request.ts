import axios from 'axios';


type Method = 'get' | 'GET';


interface RequestConfig {
    url: string
    method: Method
    data?: any
    params?: any
}

export default function request(config: RequestConfig) {
    // const config = {
    //     method,
    //     url,
    // }
    // let url = config.url;
    // if (config.method.toUpperCase() === 'POST') {
    //     config.data = data;
    // }

    return new Promise((resolve, reject) => {
        axios(config).then((res) => {
            // console.log(res)
            resolve(res.data)
        }).catch((response) => {
            reject(response)
        })
    });
}
