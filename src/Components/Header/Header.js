import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    return (
        <header>
            <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold text-indigo-500 '>P</span> hotoGraphic <span className='text-3xl font-bold text-indigo-500 '>P</span>lace</h2>
            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/banner'}>Banner</CustomLink>
            </nav>
            <button onClick={() => setMenuDisplay(!menuDisplay)}>
                {menuDisplay ? <XIcon style={{ width: '30px' }}></XIcon> : <MenuAlt1Icon style={{ width: '30px' }}></MenuAlt1Icon>}
            </button>

        </header>
    );
};

export default Header;