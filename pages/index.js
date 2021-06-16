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
                            <img src = "/profile.jpeg" alt = "foto" className = "img-fluid" />
                        </div>
                        <div className = "col-md-8">
                            <h2>
                                Francisco Lugo
                            </h2>
                            <hr></hr>
                            <h4>
                                Fullstack Developer
                            </h4>
                            <p>
                                Passionate Systems Engineering college student at Universidad 
                                Nacional de Colombia, with knowledge in web applications development.

                                I have interest in job opportunities where software engineering is 
                                required to solve problems. I am seeking a role with professional 
                                challenges and learning opportunities, where I could contribute with my
                                knowledge and develop my personal growth.
                            </p>
                            <hr></hr>
                            <h3>
                                <a href = "/hireme">
                                Hire me!  
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section */}
        <div className = "row py-4">
            <div className = "col-md-4">
                <div className = "card bg-light px-4 py-4">
                    <h3> Skills </h3>
                    <SkillList />
                </div>
            </div>

            <div className = "col-md-8">
                <div className = "card card-body"> 
                    <h3> Experience </h3>
                    <ExpList />
                </div> 
            </div>
        </div>
    
    </Layout>
)

export default Index;