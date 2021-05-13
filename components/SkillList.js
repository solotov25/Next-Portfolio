import { skills } from '../profile';

const SkillList = () => {
    return (
        skills.map( ({name, percentage}, i) => (
            <div className = "card card-body" key = {i}>
            
                <h5> { name } </h5>

                <div className = "progress">
                    <div 
                        className = "progress-bar" 
                        role = "progressbar" 
                        style = {{ width: `${percentage}%` }}>
                    </div>
                </div>
            </div>
        ))
    )
}

export default SkillList;
