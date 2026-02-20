import { useForm } from "react-hook-form";

type FormInputs = {
  email: string,
  password: string
}

export const Form = () => {

  // EL register es un método de RHF para el manejo de los inputs
  const { register , handleSubmit , watch , formState } = useForm<FormInputs>({
    // Default values para rellenar los datos por ejemplo en un formulario de edición, en caso de que los inputs tengan que tener valores por defecto 
    defaultValues: {
      email: 'alvaro@hotmail.com',
      password: 'ABC123'
    }
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  }

  console.log(watch('email'));

  return (
    <>
      <h3>Formulario</h3>

      {/* Form tiene al atributo onSubmit que recibe un metodo de useForm que a su vez como parámetro recibe la función para enviar los datos */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {/* Con el Spread operator de register se realiza la misma acción que el manejo de inputs con value, onChange, name */}
          <input type="text" placeholder='Email' {...register('email')}/>
          <input type="text" placeholder='Password' {...register('password')}/>
          <button>Enviar</button>
        </div>
      </form>

      <div>
        {JSON.stringify(formState, null, 1)}
      </div>
    </>
  )
}

// MÉTODOS DE REACT HOOK FORM:

// Register: maneja el control de los inputs
// handleSubmit: maneja el envío de la información
// watch: maneja la visiualización de los cambios que se producen en el input
// formState: se visualiza el resultado de lo que se envía por el form