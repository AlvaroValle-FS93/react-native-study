import { create } from "zustand"


interface AuthState {

  status: 'authenticate' | 'unauthenticated' | 'checking',
  token?: string,
  user?: User

  login: (email: string, password: string) => void,
  logout: () => void
}

interface User {

  name: string,
  email: string
}

export const useAuthStore = create<AuthState>()( (set) => ({

  status: 'checking',
  token: undefined,
  user: undefined,

  login: (email: string, password: string) => {
    set ({
      status: 'authenticate',
      token: 'abcd1234',
      user: {
        name: 'Alvaro',
        email: email,
      }
    })
  },

  logout: () => {
    set ({
      status: 'unauthenticated',
      token: undefined,
      user: undefined
    })
  }

}))