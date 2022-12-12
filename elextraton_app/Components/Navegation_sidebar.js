

import { RiTeamFill,RiDashboardLine,RiCalendarTodoFill,RiReplyAllLine } from "react-icons/ri";
import { SiGoogledrive,SiGithub,SiNotion,SiSpinrilla} from "react-icons/si";



export default function Navegation_sidebar() {

    return(


        <aside class="shadow" aria-label="Sidebar">
        <div class=" py-6 px-3 bg-gray-50 dark:bg-gray-900">


            <a class="flex items-center pl-2.5 mb-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <SiSpinrilla/>


                <span class="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Eletraton CCM</span>
            </a>


            <ul class="space-y-4">
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiDashboardLine/>
                    <span class="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiCalendarTodoFill/>
                    <span class="flex-1 ml-3 whitespace-nowrap">To do List</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiTeamFill/>
                    <span class="flex-1 ml-3 whitespace-nowrap">Team</span>
                    </a>
                </li>
                <li>
                    <a href="https://equable-earl-b28.notion.site/Electrat-n-Borregos-CCM-7c443c1d0fb64cf1a6c58aa10ca27f1c" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SiNotion/>
                    <span class="flex-1 ml-3 whitespace-nowrap">Notion</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/armando-genis/telemetry_electarton" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SiGithub/>
                    <span class="flex-1 ml-3 whitespace-nowrap">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/folders/0AOPn13d8o5cUUk9PVA" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SiGoogledrive/>
                    <span class="flex-1 ml-3 whitespace-nowrap">Drive</span>
                    </a>
                </li>

            </ul>


            <div id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
                <div class="flex items-center mb-3">
                    <span class="dark:bg-blue-700 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:text-white">Importants days</span>
                </div>
                <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
                    Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                </p>
            </div>


            <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiReplyAllLine/>
                    <span class="flex-1 ml-3 whitespace-nowrap">Log out</span>
                    </a>
                </li>
            </ul>



        </div>
        </aside>




    )


}