import { useEffect , useState } from 'react'
import type { ReqResUserListResponse, Result } from '../interfaces';
import axios from 'axios';


// Para dejarlo limpio la llamada a API se hace fuera incluso del archivo (ahora está dentro como ejemplo) y se crea una función que sea la que lo hace. Luego la llamamos con useEffect y usamos el then para que sea más breve
const loadUserData = async (): Promise<Result[]> => {

  try {

    const {data} = await axios.get<ReqResUserListResponse>('https://rickandmortyapi.com/api/character');
    return data.results;
    
  } catch (error) {
    console.log(error);
    return [];
  }

}

export const UsersPage = () => {

  const [users, setUsers] = useState<Result[]>([]);

  console.log(users);

  useEffect(() => {

    // Código muy limpio esto hace que lo que retorne la funcion se setea en setUsers
    loadUserData().then(setUsers);
    
  }, []);


  return (
    <div>
      <h3>Users page</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Especie</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.id} user={user}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface Props {
  user: Result;
}

export const UserRow = ({user}: Props) => {

  const {image, name, species} = user;

  return (
    <tr>
      <td>
        <img style={{width: '100px'}} src={image} alt="user image" />
      </td>
      <td>{name}</td>
      <td>{species}</td>
    </tr>
  )
}