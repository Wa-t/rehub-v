import { message } from "antd";
import { stringify } from "querystring";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(
  url: string,
  options: { method: string; body?: any; params?: any }
) {

  let newUrl = url;
  let responseBody = {};
  responseBody = {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  };
  const { params } = options;

  // get
  if (params) {
    newUrl += `?${stringify(params)}`;
  }
  const response = await fetch(newUrl, responseBody);

  if (response.status !== 200) {
    message.error("网络或服务器异常！");
    return {
      code: response.status
    };
  }
  const data = await response.json();
  return {
    code: 200,
    data,
  };
}
