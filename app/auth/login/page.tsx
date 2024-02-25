'use client'
import { auth } from '@/config/firebase.config'
import { AuthContext } from '@/context/AuthContext'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import { Button } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

function page() {
const router = useRouter()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


// const googleSignIn = async() => {
//   const provider = new GoogleAuthProvider();
//   const res = await signInWithPopup(auth,provider);
//   if(res?.user?.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL){
//       router.push('/admin')
//   }else{
//       router.push('/')
//   }
// }
const {googleSignIn,login} = useContext(AuthContext)

// const login = (email:string, password:string) => {
//   return signInWithEmailAndPassword(auth,email,password)
// }
    const handleLogin  = async (e:any)=>{
   e.preventDefault()
   const res = await login(email,password)
   console.log('res ',res)
   router.push('/admin')
   try {
     await firebase
   } catch (error) {
    console.log(error)
   }
    }
  return (
  <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          AR Textiles Admin
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full bg-blue-500 p-2  rounded-md  text-white bg-primary-600 hover:bg-blue-400 ">Sign in</button>
                  <Button
                  color="light"
                  onClick={googleSignIn}
                  className="mt-3 p-3 w-full mb-4 text-blue-500 bg-white hover:bg-gray-200 border brdr-slate-300"
                >
                  <FcGoogle size={20} className="mr-2" />
                  <div className="text-black">Sign In with Google</div>
                </Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default page