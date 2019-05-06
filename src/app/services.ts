import request from "@/common/utils/request";

export async function inquireUser() {
  return request('api/users/wstreet', {
    method: 'get',
  });
}