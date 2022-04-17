import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [user, error, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold text-indigo-500 '>P</span>hotoGraphic <span className='text-3xl font-bold text-indigo-500 '>P</span>lace</h2>
            {menuDisplay && <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/blogs'}>Blog</CustomLink>
                <CustomLink to={'/aboutme'}>About Me</CustomLink>

                {
                    !user ? <CustomLink to={'/login'}>Login</CustomLink> : <button onClick={handleSignOut} className=' px-3 rounded-xl border-2 border-indigo-500'>Signout</button>
                }
                <CustomLink to={'/registar'}>Registar</CustomLink>
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