import {
    jsonPlaceHolderAPI,
    jsonPlaceHolderPaths
} from "../../../core/apis/jsonPlaceHolder.api"

// Servicio getUsers
export const getUsers = async () => {
    const { data } = await jsonPlaceHolderAPI.get(`${jsonPlaceHolderPaths.users}`);
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await jsonPlaceHolderAPI.get(jsonPlaceHolderPaths.users);
    return data;
  }
  
  // Servicio getUsersById
  // const getUsersById = async (id) => {
  //   const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
  //   const data = await response.json();
  //   return data;
  // }