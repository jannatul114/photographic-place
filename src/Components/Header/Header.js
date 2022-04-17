import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    return (
        <header>
            <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold text-indigo-500 '>P</span>hotoGraphic <span className='text-3xl font-bold text-indigo-500 '>P</span>lace</h2>
            {menuDisplay && <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/banner'}>Blog</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
                <CustomLink to={'/registure'}>Registure</CustomLink>
            </nav>

            }
            <button onClick={() => setMenuDisplay(!menuDisplay)}>
                {menuDisplay ?
                    <XIcon width={30} />
                    :
                    <MenuAlt1Icon width={30} />
                }
            </button>

        </header>
    );
};

export default Header;