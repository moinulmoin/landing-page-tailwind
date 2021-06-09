import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function Header() {
    const [isShowing, setIsShowing] = useState(false);
    return (
        <header>
            <nav className="h-[60px] px-6 py-4 md:py-6 md:px-12 lg:px-20 w-full flex items-center justify-between bg-gray-900 text-white">
                <div className="animate-bounce">
                    <a href="/" className="text-2xl">
                        LOGO
                    </a>
                </div>
                <div className="md:hidden cursor-pointer">
                    {isShowing ? (
                        <XIcon className="h-8" onClick={() => setIsShowing(!isShowing)} />
                    ) : (
                        <MenuAlt1Icon className="h-8" onClick={() => setIsShowing(!isShowing)} />
                    )}
                </div>
                <div className="hidden md:flex space-x-8">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </nav>
            {isShowing && (
                <div className="w-full bg-gray-900 text-white my-3 px-6 py-3 text-center text-xl space-y-3 rounded">
                    <p className="hover:cursor-pointer hover:text-gray-300">Home</p>
                    <p className="hover:cursor-pointer hover:text-gray-300">About</p>
                    <p className="hover:cursor-pointer hover:text-gray-300">Contact</p>
                </div>
            )}
        </header>
    );
}

export default Header;
