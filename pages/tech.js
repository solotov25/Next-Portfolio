import Layout from '../components/Layout';
import TechList from '../components/TechList';

const Technologies = () => (
    <Layout>
        <header className = "row">
            <div className = "col-md-12">
                <div className = "card card-body bg-secondary">
                <h1>
                    Technologies
                </h1>    

                <div className = "row"> 
                    <div className = "col-md-12">
                        <TechList />
                    </div>
                </div>
                </div>
            </div>
        </header>
        
    </Layout>    

)

export default Technologies;
