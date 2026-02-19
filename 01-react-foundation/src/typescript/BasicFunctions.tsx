

export const BasicFunctions = () => {

  // Le estamos diciendo que la suma de los dos parámetros numéricos ha de ser un string
  const suma = (a: number, b: number) :string => (
    (a + b).toString()
  ) 

  return (
    <>
      <h3>Funciones básicas</h3>

      <p>El resultado de la suma es: {suma(10, 10)}</p>
    </>
  )
}
