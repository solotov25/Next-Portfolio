import { experience } from '../profile';

const ExpList = () => {
    return (
        <ul>
            {
                experience.map( ({title, description, from, to}, i) => (
                    <div className = "card card-body" key = {i}>
                        <li>
                            <h4> {title} </h4>
                            <h5> { from }-{to} </h5>
                            <p> {description} </p>    
                        </li>      

                    </div>
                ))
            }
        </ul>
    )
}

export default ExpList;
