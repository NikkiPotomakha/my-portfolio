import React from 'react';
import './styles.css/Navbar.css';


const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className='nav-content'>
                    <img className='logo' src='/src/icons/logo.VP.svg' alt='VP' />
                

                    <ul>
                        <li>
                            <a className="menu-item">HOME</a>
                        </li>
                        <li>
                            <a className='menu-item'>ABOUT ME</a>
                        </li>
                        <li>
                            <a className='menu-item'>EDUCATION</a>
                        </li>
                        <li>
                            <a className='menu-item'>PROJECTS</a>
                        </li>
                        <li>
                            <a className='menu-item'>CONTACT</a>
                        </li>

                        <button className='contact-btn' onClick={() => { }}>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar