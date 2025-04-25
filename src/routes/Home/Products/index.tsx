
import { Outlet } from "react-router-dom";
import NavProducts from "../../../components/NavProducts";


export default function Products(){

    return(
        <body>
            <main>
                <section className="container">
                    <div className="mt20 mb20">
                    <NavProducts/>
                    </div>
                </section>
            </main>
            <Outlet/>
        </body>
    );



}