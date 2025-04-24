import NavProducts from "../../../components/NavProducts";



export default function ProductsBooks(){

    return(
        <body>
            <main>
                <section className="container">
                    <div className="mt20 mb20">
                    <NavProducts/>
                    </div>
                    <div>
                    <ul className=''>
                    <li> <a href=""> Livro 1 </a></li>
                    <li> <a href=""> Livro 2 </a></li>
                    <li> <a href=""> Livro 3</a></li>
                    </ul>
                    </div>
                </section>
            </main>
        </body>
    );



}