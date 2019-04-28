export function checkLogin(): Promise<{code:string}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: '200',
      });
    }, 2000);
  });
}
