    'use client'
    import  { createContext , useContext, useEffect, useState } from 'react'
     import { onAuthStateChanged , createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth'
    import { auth } from '@/config/firebase.config'  
    import { useRouter } from 'next/navigation'

    export const  AuthContext = createContext<any>({})

    export const AuthContextProvider = ({children}:{children:React.ReactNode}) =>{

        const [user,setUser] = useState<any>(null)
        const [ loading , setLoading ] = useState(true) 
        const router = useRouter()

        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,(user) => {
                if(user){
                    setUser({
                        uid:user.uid,
                        email:user.email,
                        displayName : user.displayName
                    })
                }else{
                    setUser(null)
                }
                setLoading(false)
            })
            return ()=> unSubscribe()
        },[])

        const signup = (email:string, password:string) => {
            try {
                return createUserWithEmailAndPassword(auth,email,password)
            } catch (error) {
                throw error
            }
        }
        
        const login = (email:string, password:string) => {
            return signInWithEmailAndPassword(auth,email,password)
        }

        const logout = async() =>{
            setUser(null)
        const res = await  signOut(auth)
        console.log("res logout ",res)
        router.push('/auth/login')
        }

        const googleSignIn = async() => {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth,provider);
            if(res?.user?.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL){
                router.push('/admin')
            }else{
                router.push('/')
            }
        }
    

        return (
            <AuthContext.Provider value={{login, user, signup,logout,googleSignIn}}>
                {loading ? null : children}
            </AuthContext.Provider>
        )
    }