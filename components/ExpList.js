import { experience } from '../profile';

const ExpList = () => {
    return (
        <ul>
            {
                experience.map( ({title, description, from, to}, i) => (
                    <div className = "card card-body" key = {i}>
                        <li>
                            <h5> {title} </h5>
                            <h6> { from }-{to} </h6>
                            <p> {description} </p>    
                        </li>      

                    </div>
                ))
            }
        </ul>
    )
}

export default ExpList;
