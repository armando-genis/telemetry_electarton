//Enrutador. 
import Navegation_sidebar from "./Navegation_sidebar"
import Head from "next/head"
import { RiMenu2Fill,RiCloseFill } from "react-icons/ri";
import React, {useState} from 'react'
import { Sidebar } from "flowbite-react";

export default function Container_sidebar(props)  {

    const [open, setOpen] = useState(false)

    return(
    <div>
        <Head>
            <title>Proyect jeager - home</title>
            
        </Head>

        <div className="min-h-screen grid grid-col-1 lg:grid-cols-6 dark:bg-gray-900 shadow">

            {/* SideBar */}

            <div className={`fixed lg:static transition-all  ${open ? "top-0" : "top-full"} w-full h-full  col-span-1`}>
                <Navegation_sidebar/>
            </div>


            {/* Botton of the SideBar in mobiles */}
            <button className="block lg:hidden absolute bottom-6 right-4 bg-purple-500 p-2 text-white rounded-full" onClick={() => {
                    setOpen(!open)
                }}>
                {/* Open -  Close */}
                {open ? <RiCloseFill/> : <RiMenu2Fill/>}

            </button>


            {/* Dashboard */}
            <div className="dark:bg-gray-800 col-span-5">

                {props.children}
                
            </div>



        </div>

        




    </div>
    )
}

