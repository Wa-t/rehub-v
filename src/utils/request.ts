import axios from 'axios';
import { notification } from 'antd';


type Method = 'get' | 'GET';


interface RequestConfig {
    url: string
    method: Method
    data?: any
    params?: any
}

axios.interceptors.response.use((response) => {
    // 在接收响应做些什么，例如跳转到登录页
    console.log(response)
    return response;
}, (error) => {
    notification.error({
        message: '什么地方出错了  :(',
        description: error.message
    })
    return Promise.reject(error);
});

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
            resolve(res.data)
        }).catch((response) => {
            reject(response)
        })
    });
}
