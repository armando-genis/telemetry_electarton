//Components -> containers
import Container_sidebar from "../components/Container_sidebar"
import LineGraph1 from "../components/chart_heart"
import LineGraph2 from "../components/chart_velocity"
import ChangingProgressProvider from "../Components/ChangingProgressProvider"
import Head from "next/head"
import { RiDashboardLine,RiMapPinFill,RiSteeringFill,RiBroadcastLine,RiHeartPulseFill,RiDashboard2Line,RiBatteryChargeFill,RiCompass2Fill} from "react-icons/ri";
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const percentage = 50;
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
        <div className="pt-2 grid gap-x-2 gap-y-2 lg:grid-cols-3 grid-cols-1 ">
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
            <div className="row-span-2 cursor-cell overflow-hidden ">
                <div className="min-w-fit  h-[52rem] rounded-lg shadow-md bg-gray-900 ">
                    <div className="absolute inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-br-lg text-indigo-600 bg-gray-800">
                        <div className="text-2xl">
                            <RiSteeringFill/>
                        </div>
                    </div>
                    <div className=" p-5 justify-items-stretch grid gap-x-2 gap-y-2 grid-cols-1 ">

                        
                        <div className="justify-self-center min-w-fit min-h-fit relative">

                            <div className="h-7 w-90 relative">


                                <div className="absolute text-indigo-600 text-3xl right-[14px] top-[50px] "> 
                                    <RiDashboard2Line/>
                                </div>

                                <div className="absolute text-indigo-600 right-[-10px] top-[75px] "> 
                                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">5800 rpm</h5>
                                </div>


                                <div className="absolute right-[-30px] top-[20px]">
                                    <div style={{ width: 120, height: 120 }}>
                                        <ChangingProgressProvider values={[10,80,70]}>
                                                {value => (
                                                <CircularProgressbar
                                                    value={value}
                                                    strokeWidth={4}
                                                    circleRatio={1}
                                                    styles={buildStyles({
                                                    rotation: 1 / 2 + 1 / 8,
                                                    strokeLinecap: "butt",
                                                    textColor: "rgb(245 243 255)",
                                                    pathColor: "rgb(79 70 229)",
                                                    trailColor: "rgb(49 46 129)",
                                                    textSize: "15px",
                                                    })}
                                                />
                                                )}
                                            </ChangingProgressProvider>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:mt-20 mt-24 relative w-72 h-72 lg:w-80 lg:h-80  rounded-full border-indigo-600 grid">
                                
                               <div className="absolute place-self-center z-[14]">
                                    <div className="w-[19rem] h-[19rem] lg:w-[20rem] lg:h-[20rem]">
                                        <ChangingProgressProvider values={[20,80,40]}>
                                                {value => (
                                                <CircularProgressbar
                                                    value={value}
                                                    strokeWidth={3}
                                                    circleRatio={0.75}
                                                    styles={buildStyles({
                                                    rotation: 1 / 2 + 1 / 8,
                                                    strokeLinecap: "butt",
                                                    textColor: "rgb(245 243 255)",
                                                    pathColor: "rgb(79 70 229)",
                                                    trailColor: "rgb(49 46 129)",
                                                    textSize: "15px",
                                                    })}
                                                />
                                                )}
                                            </ChangingProgressProvider>
                                    </div>
                                </div>


                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[-90deg] z-[9]"></div>

                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[0deg] z-[9] "></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[46deg] z-[9]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[134deg] z-[9]"></div>

                                <div className="absolute w-52 h-52 bg-gray-900 place-self-center rounded-full z-[10]" ></div>


                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[57deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[69deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[81deg] z-[7]"></div>

                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[100deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[112deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[124deg] z-[7]"></div>
                                
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[146deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[158deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[170deg] z-[7]"></div>

                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[192deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[204deg] z-[7]"></div>
                                <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[216deg] z-[7]"></div>

                                <div className="absolute place-self-center bottom-[12px] left-[10px] z-[8]" >
                                    <div className="absolute w-72 h-16 bg-gray-900 -bottom-2" ></div>
                                </div>

                                <div className="absolute w-60 h-60 bg-gray-900 place-self-center rounded-full z-[8]" ></div>

                                <div className="absolute place-self-center bottom-[12px] left-[100px] z-[11]" >
                                    <div className="absolute w-24 h-16 bg-gray-900 -bottom-2 z-[11]" ></div>
                                </div>

                                <div className="absolute place-self-center right-[65px]  z-[11]" >
                                    <h5 className="text-lg text-white">160</h5>
                                </div>

                                <div className="absolute place-self-center left-[65px]  z-[11]" >
                                    <h5 className="text-lg text-white">40</h5>
                                </div>
                    
                                <div className="absolute place-self-center top-[65px]  z-[11]" >
                                    <h5 className="text-lg text-white">100</h5>
                                </div>

                                <div className="absolute place-self-center top-[90px] left-[90px] z-[11]" >
                                    <h5 className="text-lg text-white">70</h5>
                                </div>


                                <div className="absolute place-self-center top-[90px] right-[90px] z-[11]" >
                                    <h5 className="text-lg text-white">130</h5>
                                </div>
                            
                                <div className="absolute place-self-center bottom-[90px] left-[90px] z-[11]" >
                                    <h5 className="text-lg text-white">10</h5>
                                </div>

                                <div className="absolute place-self-center bottom-[90px] right-[90px] z-[11]" >
                                    <h5 className="text-lg text-white">190</h5>
                                </div>

                                
                            </div>

                             <div className="relative grid text-center z-[11] bottom-16">
                                <h1 className="  place-self-center font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">190</span></h1>
                                <p className=" text-center  text-lg text-gray-500">KM/H</p>
                            </div>


                        </div>




                        <div className="justify-self-center min-w-fit min-h-full mt-3 relative bottom-20">
                            <div className="text-2xl text-blue-700">
                                <RiBatteryChargeFill/>

                            </div>
                            
                            <div className="flex justify-center items-center">
                            
                                <div class="mb-1 mr-2 text-base font-medium text-indigo-600">Battery</div>

                                <div className="h-7 w-12 relative py-2 mr-2">
                                    <div className="w-12 bg-gray-700 border-2 border-indigo-900 rounded">
                                        <div className="rounded bg-indigo-600 h-2.5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"style={{ width: "100%" }} ></div>
                                    </div>
                                </div>
                                <div className="h-7 w-12 relative py-2 mr-2">
                                    <div className="w-12 bg-gray-700 border-2 border-indigo-900 rounded">
                                        <div className="rounded bg-indigo-600 h-2.5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"style={{ width: "100%" }} ></div>
                                    </div>
                                </div>
                                <div className="h-7 w-12 relative py-2 mr-2">
                                    <div className="w-12 bg-gray-700 border-2 border-indigo-900 rounded">
                                        <div className="rounded bg-indigo-600 h-2.5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"style={{ width: "100%" }} ></div>
                                    </div>
                                </div>
                                <div className="h-7 w-12 relative py-2 mr-2">
                                    <div className="w-12 bg-gray-700 border-2 border-indigo-900 rounded">
                                        <div className="rounded bg-indigo-600 h-2.5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"style={{ width: "45%" }} ></div>
                                    </div>
                                </div>
                                <div className="ml-2 mb-1 text-base font-medium text-indigo-600">75%</div>
                            </div>


                        </div>

                        <div className="justify-self-center min-w-fit min-h-full mt-3 relative bottom-20">
                            <div className="text-2xl text-blue-700">
                                <RiCompass2Fill/>

                            </div>
                            
                            <div className="flex justify-center items-center">
                            
                                <div class="mb-1 mr-2 text-base font-medium text-indigo-600">Range</div>

                                <div className="h-7 w-56 relative py-2 mr-2">
                                    <div className="w-56 bg-gray-700  border-2 border-indigo-900 rounded">
                                        <div className="rounded bg-indigo-600 h-2.5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"style={{ width: "75%" }} ></div>
                                    </div>
                                </div>

                                <div className="ml-2 mb-1 text-base font-medium text-indigo-600">75%</div>
                            </div>


                        </div>

                        <div className="justify-self-center w-[34rem] h-20 relative bottom-12">
                            <LineGraph2/>
                        </div>


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