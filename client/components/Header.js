import React, { useContext, useEffect } from 'react';
import Link from 'next/link'
import authContext from '../context/auth/authContext'

const Header = () => {  

    // Define context
    const AuthContext = useContext(authContext)
    const { user, auth, authUser, closeSession } = AuthContext
    
    useEffect(() => {  
        const token = localStorage.getItem('token'); 
        if(token){
            authUser()
        }
    }, []);  

    return ( 
        <header className="py-8 flex flex-col md:flex-row items center justify-between">
            <Link href={"/"}>
                <h1 className="h1link text-4xl px-4 tracking-tight font-extrabold text-gray-900 text-center">Test Técnic Parlem </h1>
            </Link>
            
            <div className="header-buttons mt-4">             

                { user && auth ? (
                    <>  
                        <Link href="/customers">
                            <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Clients</a>
                        </Link>
                        <button 
                            className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
                            onClick={ () => closeSession() }
                        >
                            Tancar sesió                        
                        </button>
                        <p className="mt-5 mr-2 text-right">Hola - { user.name } </p>
                        
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar sessió</a>
                        </Link>
                        <Link href="/register">
                            <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear compte</a>
                        </Link>
                    </>
                )}
                
               
            </div>
        </header>
    );
}
 
export default Header;