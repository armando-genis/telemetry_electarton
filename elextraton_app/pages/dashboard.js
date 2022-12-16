//Components -> containers
import Container_sidebar from "../components/Container_sidebar"
import Head from "next/head"
import { RiDashboardLine} from "react-icons/ri";

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
        <div class="grid gap-x-8 gap-y-4 lg:grid-cols-3 grid-cols-1 ">
        <div>

            <div role="status" class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div class="flex items-baseline mt-4 space-x-6">
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-blue-700"></div>
                    <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div className="row-span-2">
            <div role="status" class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div class="flex items-baseline mt-4 space-x-6">
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-yellow-700"></div>
                    <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>

        </div>
            <div>
                <div role="status" class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                    <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div class="flex items-baseline mt-4 space-x-6">
                        <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-green-700"></div>
                        <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    </div>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        <div>
            <div role="status" class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div class="flex items-baseline mt-4 space-x-6">
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-white"></div>
                    <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div>
            <div>
                <div role="status" class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                    <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div class="flex items-baseline mt-4 space-x-6">
                        <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-purple-700"></div>
                        <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    </div>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>

        </div>




    </Container_sidebar>
)


export default Dasboard