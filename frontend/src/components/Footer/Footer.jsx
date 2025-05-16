import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Footer.css';

const socialLinks = [
    {
        path: 'https://www.facebook.com/ferreteriaaldaba',
        icon: <AiFillFacebook className = 'social-icon' />,
    },
    {
        path: 'https://www.instagram.com/abrinalferreteria/',
        icon: <AiOutlineInstagram className = 'social-icon' />,
    },
    {
        path: 'https://github.com/PabloAmaya12',
        icon: <AiFillGithub className = 'social-icon' />,
    },
    {
        path: 'https://www.linkedin.com/in/pablo-iv%C3%A1n-amaya-aldaba-351532336/',
        icon: <RiLinkedinFill className = 'social-icon' />,
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className = 'footer'>
            <div className = 'container'>
                <div className = 'footer__content'>
                    <div>
                        <p className = 'footer__text'>
                            CopyRight © {year} developed by Pablo Amaya all right reserved.
                        </p>

                        <div className = 'social__links'>
                            {socialLinks.map((link, index) => (
                                <Link to = {link.path} key = {index} className = 'social__link'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;