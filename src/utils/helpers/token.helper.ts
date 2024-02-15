export const setTokenToLocalStorage = (data:string)=> localStorage.setItem('token',data);

export const setUserToLocalStorage = (data:any)=> localStorage.setItem('user', JSON.stringify(data));


export const getTokenFromStorage = () => localStorage.getItem('token') ?? '';
export const getUserFromStorage = () => JSON.parse(localStorage.getItem('user') ?? 'null');