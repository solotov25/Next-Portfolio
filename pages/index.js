import ExpList from '../components/ExpList';
import Layout from '../components/Layout';
import SkillList from '../components/SkillList';

const Index = () => ( 
    <Layout>
        {/* Header card */}
        <header className = "row">
            <div className = "col-md-12">
                <div className = "card card-body bg-secondary">
                    <div className = "row"> 
                        <div className = "col-md-4">
                            <img src = "/foca.jpg" alt = "foto" className = "img-fluid" />
                        </div>
                        <div className = "col-md-8">
                            <h2>
                                Francisco Lugo
                            </h2>
                            <h4>
                                Fullstack Developer
                            </h4>
                            <p>
                                Parrafo
                            </p>
                            <a href = "/hireme">
                              Hire me!  
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section */}
        <div className = "row py-4">
            <div className = "col-md-4">
                <div className = "card bg-light px-4 py-2">
                    <h2> Skills </h2>
                    <SkillList />
                </div>
            </div>

            <div className = "col-md-8">
                <div className = "card bg-light px-4 py-2">
                    <div className = "card card-body"> 
                        <h2> Experience </h2>
                        <ExpList />
                    </div> 
                </div>
            </div>
        </div>
    
    </Layout>
)

export default Index;