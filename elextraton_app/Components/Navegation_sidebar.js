

import { RiTeamFill,RiDashboardLine,RiCalendarTodoFill,RiReplyAllLine,RiUser6Fill } from "react-icons/ri";
import { SiGoogledrive,SiGithub,SiNotion} from "react-icons/si";



export default function Navegation_sidebar() {

    return(


        <aside className="shadow" aria-label="Sidebar">
        <div className=" py-6 px-3 bg-gray-900">

            <div class=" px-8 max-w-sm mx-auto rounded-xl border-4 border-blue-900/100 shadow-lg space-y-0 py-3 flex items-center space-x-6 dark:text-white mb-3">
                <div className="text-2xl">
                    <RiUser6Fill/>
                </div>

                
                
                <div class=" space-y-2">
                    <div class="space-y-0.5">
                    <p class="text-lg font-semibold">
                        Armando Genis
                    </p>
                    <p class="text-slate-500 font-medium">
                        co-captain
                    </p>
                    </div>
                </div>
            </div>


            <ul className="space-y-4">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiDashboardLine/>
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiCalendarTodoFill/>
                    <span className="flex-1 ml-3 whitespace-nowrap">To do List</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiTeamFill/>
                    <span className="flex-1 ml-3 whitespace-nowrap">Team</span>
                    </a>
                </li>
                <li>
                    <a href="https://equable-earl-b28.notion.site/Electrat-n-Borregos-CCM-7c443c1d0fb64cf1a6c58aa10ca27f1c" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SiNotion/>
                    <span className="flex-1 ml-3 whitespace-nowrap">Notion</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/armando-genis/telemetry_electarton" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SiGithub/>
                    <span className="flex-1 ml-3 whitespace-nowrap">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/folders/0AOPn13d8o5cUUk9PVA" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SiGoogledrive/>
                    <span className="flex-1 ml-3 whitespace-nowrap">Drive</span>
                    </a>
                </li>

            </ul>


            <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
                <div className="flex items-center mb-3">
                    <span className="dark:bg-blue-700 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:text-white">Importants days</span>
                </div>
                <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                    Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                </p>
            </div>


            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-700">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiReplyAllLine/>
                    <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
                    </a>
                </li>
            </ul>



        </div>
        </aside>




    )


}