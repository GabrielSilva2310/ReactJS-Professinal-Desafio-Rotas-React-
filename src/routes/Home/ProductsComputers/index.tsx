import NavProducts from "../../../components/NavProducts";



export default function ProductsComputers(){

    return(
        <body>
            <main>
                <section className="container">
                    <div className="mt20 mb20">
                    <NavProducts/>
                    </div>
                    <div>
                    <ul className=''>
                    <li> <a href=""> Computador 1 </a></li>
                    <li> <a href=""> Computador 2 </a></li>
                    <li> <a href=""> Computador 3 </a></li>
                    </ul>
                    </div>
                </section>
            </main>
        </body>
    );



}