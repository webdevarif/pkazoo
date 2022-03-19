import Image from 'next/image';
import Link from 'next/link'
import logo from './logo.svg';
import UserThumb from '../assets/img/user.png';

import { FaStore } from 'react-icons/fa';
import { ImHome2 } from 'react-icons/im';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillCompass } from 'react-icons/ai';
import { RiMessage2Fill } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';

const tabBtnClasses =
    'text-lg relative z-10 font-semibold text-[#1E1E1E] hover:bg-black/5 duration-150 px-8 md:px-20 py-2 border-b-4 border-transparent';

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="header-nav py-4 flex items-center gap-4 xl:gap-x-8">
                    {/* Header Brand */}
                    <div className="header__brand">
                        <Image src={logo.src} height={logo.height} width={logo.width} alt="alt hel" />
                    </div>
                    {/* Header search */}
                    <div className="header-search hidden sm:block">
                        <input type="text" className="py-2 px-8 bg-gray-100 rounded-full" placeholder="Search" />
                    </div>
                    {/* Header Menu */}
                    <div className="header-menu hidden lg:block ml-auto">
                        <ul className="mb-0 flex items-center text-3xl gap-y-2 gap-x-6 lg:gap-x-10">
                            <li><a href="/link" className="block transition-all duration-300 text-red-500 hover:text-red-600"><ImHome2 /></a></li>
                            <li><a href="/link" className="block transition-all duration-300 text-red-500 hover:text-red-600"><FaStore /></a></li>
                            <li><a href="/link" className="block transition-all duration-300 text-red-500 hover:text-red-600"><BsPlusCircleFill /></a></li>
                            <li><a href="/link" className="block transition-all duration-300 text-red-500 hover:text-red-600"><AiFillCompass /></a></li>
                            <li><a href="/link" className="block transition-all duration-300 text-red-500 hover:text-red-600"><RiMessage2Fill /></a></li>
                        </ul>
                    </div>
                    {/* Header Right */}
                    <div className="header-right ml-auto">
                        <ul className="mb-0 flex items-center text-3xl gap-y-2 gap-x-4 lg:gap-x-6">
                            <li><a href="/link" className="flex items-center text-red-500 hover:text-red-600">
                                <Image width={32} height={32} src={UserThumb.src} className='rounded-full min-w-[32px] object-cover object-center' alt="cover " />    
                            </a></li>
                            <li><a href="/link" className="flex items-center transition-all duration-300 text-red-500 hover:text-red-600"><BsPlusCircleFill /></a></li>
                            <li><a href="/link" className="flex items-center transition-all duration-300 text-gray-700 hover:text-gray-900"><MdOutlineShoppingCart /></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
