import request from '@/utils/request';


export function quireUser(params: any) {
    return request({
        url: `https://api.github.com/users/${params.username}`,
        method: 'get'
    })
}
