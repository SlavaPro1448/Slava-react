import "./footer.css";

import gitHub from "./../../img/icons/gitHub.svg";
import isntagram from "./../../img/icons/instagram.svg";
import linkedln from "./../../img/icons/linkedIn.svg";
import twitter from "./../../img/icons/twitter.svg";
import vk from "./../../img/icons/vk.svg";

const Footer = () => {
    return ( 
        <div>
            <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={isntagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedln} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
        </div>
     );
}
 
export default Footer;