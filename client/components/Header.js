import React from 'react';
import Link from 'next/link'

const Header = () => {
    return ( 
        <header className="py-8 flex flex-col md:flex-row items center justify-between">
            <Link href="/">
                <h1 className="h1link text-4xl px-4 tracking-tight font-extrabold text-gray-900 text-center">Test Técnic Parlem </h1>
            </Link>
            <div className="header-buttons">
                <Link href="/login">
                    <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar sessió</a>
                </Link>
                <Link href="/register">
                    <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear compte</a>
                </Link>
            </div>
        </header>
    );
}
 
export default Header;