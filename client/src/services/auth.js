export const TOKEN_KEY = '&app-token';
export const ID_USARIO = '&id_usuario';
export const NOME_USUARIO = '&nome_usuario';
export const USER_TYPE = '&user_type';

export const login = token => { localStorage.setItem(TOKEN_KEY,token); };
export const logout = () => { localStorage.clear() };

export const setIdUsuario = id => { localStorage.setItem(ID_USARIO,id); };
export const getIdUsuario = () =>  localStorage.clear(ID_USARIO) ;

export const setNomeUsuario = nome => { localStorage.setItem(NOME_USUARIO,nome); };
export const getNomeUsuario = () =>  localStorage.clear(NOME_USUARIO);

export const setUserType = tipo => { localStorage.setItem(USER_TYPE,tipo); };
export const getUserType = () => localStorage.clear(USER_TYPE);


