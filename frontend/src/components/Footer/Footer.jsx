import React from 'react';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const socialLinks = [
    {
        path: 'https://www.facebook.com/ferreteriaaldaba',
        icon: <AiFillFacebook className = 'group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://www.instagram.com/abrinalferreteria/',
        icon: <AiOutlineInstagram className = 'group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://github.com/PabloAmaya12',
        icon: <AiFillGithub className = 'group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://www.linkedin.com/in/pablo-iv%C3%A1n-amaya-aldaba-351532336/',
        icon: <RiLinkedinFill className = 'group-hover:text-white w-4 h-5' />,
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className = 'pb-16 pt-10'>
            <div className = 'container'>
                <div className = 'flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
                    <div>
                        <p className = 'text-[16px] leading-7 font-[400] text-textColor mt-4'>
                            CopyRight © {year} developed by Pablo Amaya all right reserved.
                        </p>
                        <div className = 'flex items-center gap-3 mt-4'>
                            {socialLinks.map((link, index) => (
                                <Link
                                    to = {link.path}
                                    key = {index}
                                    className = 'w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                                >
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