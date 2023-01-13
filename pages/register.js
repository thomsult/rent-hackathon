import React from 'react'
import { useForm } from "react-hook-form";
import PublicLayout from '../components/PublicLayout'
import Link from 'next/link'
import axios from "axios"
import { useRouter } from 'next/router'

export default function register() {
  const router = useRouter()
  const { register, handleSubmit, setValue,formState: { errors } ,watch} = useForm({
    defaultValues: {
      first_name: '',
      last_name:'',
      email: '',
      password: '',
    }
  });
  const onSubmit = data => axios.post("https://rent-shark-wild.netlify.app/api/register",data).then((res)=>{
    if(res.status === 200){
      console.log(res.data);
      router.push("/login")

    }
  })
  
  
  return (
    <PublicLayout children={undefined}>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
        <img
            className="h-12 w-auto"
            src="/logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Register</h2>
        
        </div>

        <div className="mt-8">
          <div>
        

        
          </div>

          <div className="mt-6">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                Prénom
                </label>
                <div className="mt-1">
                  <input
                  id="first_name"
                    type="text"
                    {...register("first_name",{ 
                      required: "Nom d'utilisateur est obligatoire", 
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.first_name && <span className="text-sm text-red-700">Ce chant est obligatoire</span>}
                </div>
                
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Nom de Famille
                </label>
                <div className="mt-1">
                  <input
                  id="last_name"
                    type="text"
                    {...register("last_name",{ 
                      required: "Nom d'utilisateur est obligatoire", 
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.last_name && <span className="text-sm text-red-700">Ce chant est obligatoire</span>}
                </div>
                
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse Email
                </label>
                <div className="mt-1">
                  <input
                  id="email"
                   type="email"
                    {...register("email", { 
                      required: "Adresse Email est obligatoire",
                      pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ 
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.email && <span className="text-sm text-red-700">{errors.email?.message}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
                </label>
                <div className="mt-1">
                  <input
                  id="password"
                  type="password"
                    {...register("password", { 
                      
                      pattern:/.{6,}/,
                      required: "Mot de passe est obligatoire", 
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.password && <span className="text-sm text-red-700">Ce chant est obligatoire</span>}
                </div>
              </div>
              <p className="mt-8 text-sm font-medium text-gray-700">
        Deja un Compte?{" "}
        <Link
          href="/login"
          className="font-medium text-gray-600 hover:text-gray-500"
        >
          Login
        </Link>
      </p>

              <div>login 
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </PublicLayout>
  )
}
