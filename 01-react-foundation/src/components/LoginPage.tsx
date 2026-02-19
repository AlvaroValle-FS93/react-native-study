import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {

  // En los parámetros de la función llamamos al objeto que estamos enviando y accedemos a las porpiedades que queramos:
  const authStatus = useAuthStore( estado => estado.status );
  const user = useAuthStore( estado => estado.user );
  const login = useAuthStore( estado => estado.login );
  const logout = useAuthStore( estado => estado.logout );

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500)
  }, []);


  if (authStatus === 'checking') {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h3>Login Page</h3>

      {
        authStatus === 'unauthenticated'
        ? <p>No authenticated</p>
        : <p>Autheticated with credentials: {user?.name} & {user?.email}</p>
      }

      {
        authStatus === 'unauthenticated'
        ? <button onClick={() => login('alvaro.valle@hotmail.com', 'Holatetes7*')}>Login</button>
        : <button onClick={logout}>Logout</button>
      }

    </div>
  )
}
