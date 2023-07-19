import axios from "axios"

export const jsonPlaceHolderPaths = {
    users: "/users",
    posts: "/posts",
    comments: "/comments",
  }
  
export const jsonPlaceHolderAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  })