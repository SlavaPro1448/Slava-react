import first from "./../../img/projects/01.jpg";

import "./style.css";

const Project = ({title}) => { 
    return ( <li className="project">
                <a href="./project-page.html">
                    <img 
                        src={first} 
                        alt="Project img" 
                        className="project__img"
                    />
            <h3 className="project__title">{title}</h3>
        </a>
    </li> );
}
 
export default Project;