import React, { useState, type FormEvent} from "react"
import { Button } from "./button"

export const Forms = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  // Funcion que al enviar el formulario, evita recargar pagina
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();   

    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const isValid = regExp.test(inputValue);

    if (isValid){
      setError(false);
      setSuccess(true);
    }
    else{
      setError(true);
      setSuccess(false);
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value)

    // Al ingresar valor, se oculta msj de error o success
    if(error) setError(false);
    if(success) setSuccess(false);
  }


  return (
    <div className="text-center bg-Navy-850 py-14 px-6 mx-4 rounded-lg absolute top-[-200px] left-0 md:w-[520px] md:left-1/2 md:-translate-x-1/2 md:m-0 xl:w-[790px] xl:mt-10">
        <h1 className="text-lg font-bold mb-4">Get early access today</h1>
        <p className="text-[0.9rem] mb-4 xl:px-8 xl:mb-10">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <form className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:mx-3" onSubmit={handleSubmit} > 
            <div className="flex flex-col w-full xl:w-[490px]">
            <input className="mt-4 bg-White rounded-3xl h-12 text-gray-500 placeholder:text-gray-400 text-sm px-6 focus:outline-none xl:w-[490px]" type="email" name="email" autoComplete="email" placeholder="email@example.com" onChange={handleChange} value={inputValue}/>
  
            {error &&
              <p className="text-sm text-red-500 mb-2 mt-1">Please enter an valid email address</p>
            }

            {success &&
              <p className="text-sm text-green-500 mb-2 mt-1">Email sent successfully!</p>
            }
            </div>

            <Button text="Get Started For Free"/>
        </form>
    </div>
  )
}
