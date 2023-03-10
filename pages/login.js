import React,{useContext} from 'react'
import PublicLayout from '../components/PublicLayout'
import { useForm } from "react-hook-form";
 import axios from "axios"
 import { useRouter } from 'next/router'
import Link from 'next/link'
import UserContext from '../context/UserContext';

export default function login() {
  const {user, setUser} = useContext(UserContext)
  const router = useRouter()

  const { register, handleSubmit, setValue,formState: { errors } ,watch} = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const onSubmit = data => axios.post("https://rent-shark-wild.netlify.app/api/login",data).then((res)=>{
    setUser(res.data[0])
    console.log(res.data[0])
    router.push("/")

  });

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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login</h2>
        
        </div>

        <div className="mt-8">
          <div>
        

        
          </div>

          <div className="mt-6">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                <input
                id="email"
                   type="email"
                    {...register("email", { 
                      required: true 
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", { 
                      required: true 
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>  
              <p className="mt-8 text-sm font-medium text-gray-700">
        Pas de Compte?{" "}
        <Link
          href="/register"
          className="font-medium text-gray-500 hover:text-gray-800"
        >
          Enregistrement
        </Link>
      </p>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
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
