import { UseUsers } from "../hooks";
import { UserRow } from "../components";

export const UsersPage = () => {

  const {users, clickNextPage, clickPrevPage} = UseUsers();

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

      <div>
        <button onClick={clickPrevPage}>Prev</button>
        <button onClick={clickNextPage}>Next</button>
      </div>
    </div>
  )
}