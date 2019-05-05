import request from "@/common/utils/request";

export async function inquireUser() {
  return request('https://api.github.com/users/wstreet', {
    method: 'get',
  });
}