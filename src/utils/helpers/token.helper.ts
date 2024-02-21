export const setTokenToLocalStorage = (data:string | null)=> {
    if(data){
        localStorage.setItem('token',data)
    }
};

export const setUserToLocalStorage = (data:any)=> localStorage.setItem('user', JSON.stringify(data));


export const getTokenFromStorage = () => localStorage.getItem('token') ?? null;
export const getUserFromStorage = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? 'null');

    if(user?.length > 0){
        return user[0]
    }

    return null;
};


export const clearLocalStorage = () => {
    localStorage.clear();
}