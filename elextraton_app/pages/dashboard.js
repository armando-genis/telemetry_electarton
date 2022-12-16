//Components -> containers
import Container_sidebar from "../components/Container_sidebar"
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

                <div  class="flex items-center p-4 space-x-4 w-full max-w-xs  rounded-lg divide-x shadow text-white divide-gray-700 space-x bg-gray-900">
                    <div className="text-xl text-blue-700">
                        <RiDashboardLine/>
                    </div>
                    <div class="pl-4 text-xl font-normal">Telemetry board</div>
                </div>

            </div>
        </header>

        {/* Dashboard */}
        <div class="pt-6 grid gap-x-2 gap-y-2 lg:grid-cols-3 grid-cols-1 ">
            <div>

                <div class="max-w-fit rounded-lg shadow-md bg-gray-900 ">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-blue-700 bg-gray-800">
                        <div className="text-2xl">
                            <RiMapPinFill/>
                        </div>
                    </div>
                    <div className="p-6">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        
                    </div>                    
                </div>

            </div>
            <div className="row-span-2 ">
                <div class="max-w-fit min-h-full rounded-lg shadow-md bg-gray-900 ">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-blue-700 bg-gray-800">
                        <div className="text-2xl">
                            <RiSteeringFill/>
                        </div>
                    </div>
                    <div className="p-6">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        
                    </div>                    
                </div>
            </div>
                <div class="max-w-fit min-h-full rounded-lg shadow-md bg-gray-900 ">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-blue-700 bg-gray-800">
                        <div className="text-2xl">
                            <RiBroadcastLine/>
                        </div>
                    </div>
                    <div className="p-6">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        
                    </div>                    
                </div>
            <div>
                04
            </div>
            <div>
                <div class="max-w-fit min-h-full rounded-lg shadow-md bg-gray-900 ">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-blue-700 bg-gray-800">
                        <div className="text-2xl">
                            <RiHeartPulseFill/>
                        </div>
                    </div>
                    <div className="p-6">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        
                    </div>                    
                </div>
            </div>

        </div>




    </Container_sidebar>
)


export default Dasboard