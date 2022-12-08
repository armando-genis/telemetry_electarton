//Enrutador. 
import Link  from "next/link";

const Navegation = () => {
    return (
        <div>
            <ul>
                <Link href = "/">
                    <li>Index</li>
                </Link>
                
                <Link href = "/dashboard">
                    <li>Dasboard</li>
                </Link>

            </ul>
        </div>

    )
}

export default Navegation