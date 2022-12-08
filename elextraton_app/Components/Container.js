//Enrutador. 
import Navegation from "./Navegation"
import Head from "next/head"

const Container = (props) => (
    <div>
        <Head>
            <title>Proyect jeager - home</title>
            
        </Head>
        <Navegation/>
        <div>
            {props.children}
        </div>
    </div>
)

export default Container