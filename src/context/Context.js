import axios from "axios";
import { createContext } from "react";
import { useQuery } from "react-query";

export const Context = createContext();

export function ContextProvider(props) {

  const {data, isLoading} = useQuery("fetchData", ()=>{
    return axios.get("https://randomuser.me/api/?results=10");
  });

  return (
    <Context.Provider value={{ data, isLoading }}>{props.children}</Context.Provider>
  );
}
