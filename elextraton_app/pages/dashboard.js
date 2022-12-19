//Components -> containers
import Container_sidebar from "../components/Container_sidebar"
import LineGraph1 from "../components/chart_heart"
import LineGraph2 from "../components/chart_donut"
import Head from "next/head"
import { RiDashboardLine,RiMapPinFill,RiSteeringFill,RiBroadcastLine,RiHeartPulseFill} from "react-icons/ri";

//Main build. 
const Dasboard = () => (
    
    <Container_sidebar>
        <Head>
            <title>Proyect jeager - Dasboard</title>
        </Head>

        {/* Content */}
        <header className="flex items-center justify-between ">
            <div className="lg:pt-7 ">

                <div  className="flex items-center p-4 space-x-4 w-full max-w-xs  rounded-lg divide-x shadow text-white divide-gray-700 space-x bg-gray-900">
                    <div className="text-xl text-blue-700">
                        <RiDashboardLine/>
                    </div>
                    <div className="pl-4 text-xl font-normal">Telemetry board</div>
                </div>

            </div>
        </header>

        {/* Dashboard */}
        <div className="pt-6 grid gap-x-2 gap-y-2 lg:grid-cols-3 grid-cols-1 ">
            <div>

                <div className="min-w-fit rounded-lg shadow-md bg-gray-900 ">
                    <div className="inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-blue-700 bg-gray-800">
                        <div className="text-2xl">
                            <RiMapPinFill/>
                        </div>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        
                    </div>                    
                </div>

            </div>
            <div className="row-span-2 ">
                <div className="min-w-fit min-h-full rounded-lg shadow-md bg-gray-900 ">
                    <div className="inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-indigo-600 bg-gray-800">
                        <div className="text-2xl">
                            <RiSteeringFill/>
                        </div>
                    </div>
                    <div className="p-5 justify-items-stretch grid gap-x-2 gap-y-2 grid-cols-1 ">
                        <div className="justify-self-center flex justify-evenly">
                            <div className="max-w-sm p-3 border rounded-2xl shadow-md bg-gray-800 border-gray-700 mr-0">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">30</h5>
                            </div>
                            <div className="max-w-sm p-3">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">:</h5>
                            </div>
                            
                            <div className="max-w-sm p-3 border rounded-2xl shadow-md bg-gray-800 border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">00</h5>
                            </div>
                        </div>
                        
                        <div className="justify-self-center min-w-fit min-h-full mt-3 flex justify-evenly">

                            <div className="relative w-72 h-72 border-2 rounded-full border-indigo-600 grid">
                                
                                
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-90deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-80deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-70deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-60deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-50deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-40deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-30deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-20deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-10deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[-0deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[10deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[20deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[30deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[40deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[50deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[60deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[70deg] "></div>
                                <div className="absolute w-2 h-64 bg-indigo-600 place-self-center rotate-[80deg] "></div>

                                <div className="absolute w-52 h-52 bg-gray-900 place-self-center rounded-full z-[9]" ></div>
                                <div className="absolute w-4 h-4 bg-indigo-600 place-self-center rounded-full z-[10]" ></div>
                                <div className="absolute w-72 h-24 bg-gray-900 -bottom-2 z-[11]" ></div>
                                <div className="absolute w-32 h-24 bg-gray-900  -bottom-0  left-8  z-[11]" ></div>
                                <div className="absolute w-32 h-24 bg-gray-900  -bottom-0  right-8  z-[11]" ></div>

                                <div className="absolute w-36 h-36 place-self-center z-[12] ">
                                    <div className="relative w-36 h-36">
                                        <div className="w-1 h-24 bg-indigo-600 absolute rotate-[90deg] top-[23px] right-[111px] ">
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="absolute w-72 h-24 bg-gray-900 -bottom-2 z-[13]"> 
                                    <div className="max-w-sm p-3 text-center ">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">100 rpms</h5>
                                    </div>
                                </div> 

                            </div>


                        </div>
                        <div>03</div>


                        
                    </div>                    
                </div>
            </div >
            <div className="row-span-2">

                <div className="min-w-fit">

                    <div className="h-48 rounded-lg shadow-md bg-gray-900 cursor-cell">
                        <div className="absolute inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-red-600 bg-gray-800">
                            <div className="text-2xl">
                                <RiHeartPulseFill/>
                            </div>
                        </div>
                        <div className="p-5 flex text-center lg:flex-nowrap flex-wrap justify-center items-center">
                            <div className="pr-3">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-600">Heart rate</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">80 bpm</p>
                            </div>
                            <div className="flex-auto relative lg:w-64 h-48 w-28 ">
                                {/* Chart */}

                                    <LineGraph1/>

                            </div>
                            
                            
                            
                        </div>                    
                    </div>

                    <div className="pt-2">

                        <div className="rounded-lg shadow-md bg-gray-900">
                            <div className=" inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-blue-700 bg-gray-800">
                                <div className="text-2xl">
                                    <RiBroadcastLine/>
                                </div>
                            </div>
                            <div className="p-5">

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>


                                
                            </div>    
                        

                        </div>

                    </div>




                </div>



            </div>
            <div>
                04
            </div>


        </div>
        




    </Container_sidebar>
)


export default Dasboard