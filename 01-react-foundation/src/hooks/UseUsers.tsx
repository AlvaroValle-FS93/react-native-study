import { useEffect , useRef, useState } from 'react'
import type { ReqResUserListResponse, Result } from '../interfaces';
import axios from 'axios';


const loadUserData = async (page: number = 1): Promise<Result[]> => {

  try {

    const {data} = await axios.get<ReqResUserListResponse>('https://rickandmortyapi.com/api/character', {
      params: {
        page: page
      }
    });
    return data.results;
    
  } catch (error) {
    console.log(error);
    return [];
  }

}


export const UseUsers = () => {

  const [users, setUsers] = useState<Result[]>([]);
    console.log(users);
  
    const currentPage = useRef(1);
  
    useEffect(() => {
  
      // Código muy limpio esto hace que lo que retorne la funcion se setea en setUsers
      loadUserData(currentPage.current).then(setUsers);
      
    }, []);
  
    const clickPrevPage = async () => {
  
      if (currentPage.current <= 1) return
  
      else {
        currentPage.current--
        await loadUserData(currentPage.current).then(setUsers);
  
      }
  
    }
  
    const clickNextPage = async () => {
  
      currentPage.current++
      const result = await loadUserData(currentPage.current);
      if (result) {
        setUsers(result)
      }
      else {
        currentPage.current--;
      }
      
    }

  return {
    // estados
    users,
    // métodos
    clickNextPage,
    clickPrevPage
  }


  
}
