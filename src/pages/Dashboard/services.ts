export function login(data: any) {
  return new Promise((resolve, reject) => {
    try {
      // 模拟接口返回数据
      // act an interfact to export data
      setTimeout(() => {
        resolve({
          code: "0"
        });
      }, 2000);
    } catch (e) {
      reject(e);
    }
  });
}
