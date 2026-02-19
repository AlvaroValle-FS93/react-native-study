
interface Person  {

  name: string;
  lastName: string;
  age: 32;
  address: Address;
  // Con la interrogación hacemos que no sea obligatorio, puede ser true, false o undefined
  isAlive?: true
}

interface Address {

  street: string;
  number: number;
}


export const LiteralObjects = () => {


  const user: Person = {

    name: 'Álvaro',
    lastName: 'Valle',
    age: 32,
    address: {
      street: 'Calle Sénia',
      number: 3
    }
  }

  return (
    <>
      <h3>Objetos literales</h3>
      <p>{user.name}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
      <p>{user.address.street}</p>
      <p>{user.address.number}</p>
    </>
  )
}
