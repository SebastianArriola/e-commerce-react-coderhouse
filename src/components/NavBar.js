import * as React from 'react';
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';
import logo from '../img/logo1.png'


export const pages = ['Electricas', 'Acusticas', 'Clasicas'];

const NavBar = () => {

    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <div className='header__barra animate__animated animate__fadeIn'>
                        <Link to="/" className='navegacion__enlace'><img className="img__logo" src={logo} alt="logo_img"/></Link>
                        <nav className='navegacion'>
                            <Link to="/" className='navegacion__enlace navegacion__inicio'>inicio</Link>
                            {pages.map((page, index) => {
                                return <Link key={index} to={"category/" + (index + 1)} className='navegacion__enlace'>{page}</Link>
                            })}
                            <CardWidget />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
export default NavBar;