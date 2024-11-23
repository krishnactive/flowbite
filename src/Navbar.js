import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [isDark, setDark] = useState(true);
    const [isMenu , setMenu] = useState(false);


    const toggleDarkMode = () => {
        setDark((prev) => !prev);
    };
    const toggleMenu = () => {
        setMenu((prev) => !prev);
    };


    useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[isDark]);


    return(
        <nav className='bg-gray-900 text-white dark:bg-white dark:text-black p-4 flex justify-between items-center'>
            <div className='text-2xl font-bold' >Flowbite</div>
            <div className='flex items-center gap-4' >
            {!isMenu&&(
                <div className='hidden md:flex gap-4'>
              {/* <div className='gap-4 items-center' > */}
                <a href="#" className='hover:underline'>Docs</a>
                <a href="#" className='hover:underline'>Blocks</a>
                <a href="#" className='hover:underline' >figma</a>
                <a href="#" className='hover:underline' >Pro version</a>
              </div>
            )}
            
            
                <button className='bg-gray-700 px-4 py-2 rounded-md text-white dark:bg-gray-300 dark:text-black hover:bg-gray-600 dark:hover:bg-gray-400' 
                        onClick={toggleDarkMode}
                >
                    {isDark?"Light Mode":"Dark Mode"}
                </button>
            {/* </div> */}
            <button className='bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-800'>
                Sign in
            </button>
            {/* </div> */}


            <button 
                className="md:hidden block text-white dark:text-black"
                onClick = {toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button> 
            </div>
            {isMenu&&(
                
                <div className="absolute top-16 left-0 w-full bg-gray-900 text-white dark:bg-white dark:text-black p-4 md:hidden">
                <a href="#" className="block hover:underline mb-2">
                  Docs
                </a>
                <a href="#" className="block hover:underline mb-2">
                  Blocks
                </a>
                <a href="#" className="block hover:underline mb-2">
                  Figma
                </a>
                <a href="#" className="block hover:underline">
                  Pro version
                </a>
              </div>
            )}  
             
        </nav>
    )
}

export default Navbar;