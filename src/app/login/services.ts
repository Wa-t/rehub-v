import request from "@/common/utils/request";

export async function inquireUser(params: any) {
  return request(`/api/users/${params.username}`, {
    method: 'get',
  });
}