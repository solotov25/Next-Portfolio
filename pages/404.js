import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        <header className = "row text-center">
            <div className = "col-md-12">
                <div className = "card card-body bg-secondary">
                    <div className = "row "> 
                        <div className = "col-md-12">
                            <h1> 404</h1>
                            <p>
                                This page does not exists. Please return <Link href= "/">
                                    <a> Home </a>                                    
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className = "row "> 
                        <div className = "col-md-12">
                            <img src = "/cheems.png" alt = "Doesn't work" className = "img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </Layout>
)

export default custom404;