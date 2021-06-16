import { technologies } from '../profile';

const TechList = () => {
    return (
        <ol>
            {
                technologies.map( ({title}, i) => (
                    <div className = "card card-body py-3" key = {i}>
                        <li>
                            <h5> {title} </h5>
                        </li>
                        <br></br>      
                    </div>
                ))
            }
        </ol>
    )
}

export default TechList;
