
const getSession = (name: string) => sessionStorage.getItem(name);
const saveSession = (name: string, data: any) => {
  sessionStorage.setItem(name, data);
};
const delSession = (name: string) => {
  sessionStorage.removeItem(name);
};

export {
  getSession,
  saveSession,
  delSession
}