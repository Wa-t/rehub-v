import request from "@/common/utils/request";

export async function inquireRepos() {
  return request('/api/users/wstreet/repos', {
    method: 'get',
  });
}