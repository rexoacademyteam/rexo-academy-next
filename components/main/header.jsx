import { useState } from "react";
import { BookOpenIcon, LinkIcon, QuestionMarkCircleIcon, ArrowDownOnSquareIcon, XMarkIcon, Bars3Icon, ArrowRightOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const links = [
    { name: "دوره های آموزشی", href: "#", logo: (<BookOpenIcon className="w-6 h-6" />) },
    { name: "چرا رکسو؟", href: "#", logo: (<QuestionMarkCircleIcon className="w-6 h-6" />) },
    { name: "ارتباط با ما", href: "#", logo: (<LinkIcon className="w-6 h-6" />) },
    { name: "ثبت سفارش", href: "#", logo: (<ArrowDownOnSquareIcon className="w-6 h-6" />) },
]

const MobileNav = () => {
    return (
        <div className="w-full py-4 md:hidden">
            <div className="flex flex-col items-center gap-4">
                {
                    links ? links.map((link, i) => (
                        <a key={i} href={link.href} className="ml-5 rounded-xl p-1 hover:text-[#6b36cc] cursor-pointer inline-flex">
                            {link.logo}
                            <span className="mr-1">{link.name}</span>
                        </a>
                    )) : null
                }
            </div>
        </div>
    )
}

const DesktopNav = () => {
    return (
        <nav className="hidden md:block">
            <div className="flex justify-around">
                {
                    links?.map((link, i) => (
                        <a key={i} href={link.href} className="ml-5 rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                            {link.logo}
                            <span className="mr-1">{link.name}</span>
                        </a>
                    ))
                }
            </div>
        </nav>
    )
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 start-0 end-0 px-3 py-2 bg-gray-100 shadow-md bg-base-100 z-30">
            <div className="flex justify-between items-center align-center max-w-6xl mx-auto">
                <div className={`flex justify-around ${isOpen ? "block" : ""}`}>
                    <button>
                        <ShoppingCartIcon className="w-6 h-6" />
                    </button>
                    <button type="button" class="mx-2 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800">
                        <ArrowRightOnRectangleIcon className="w-6 h-6" />
                        <span>ورود</span>
                    </button>
                </div>

                <div className={`md:flex justify-around ${isOpen ? "flex" : "hidden"} w-auto`}>
                    <DesktopNav />
                </div>

                <div className="cursor-pointer flex items-center">
                    <img src="/assets/brand_logo.png" className="hidden w-[80px] md:block" alt="logo" />
                    <img src="/assets/brand_purelogo.png" className="md:hidden w-[50px] h-[30px]" alt="logo2" />
                    <div className="md:hidden ps-4 pt-1">
                        <button onClick={handleMenuClick}>
                            {isOpen ? <XMarkIcon className="w-10 h-10" /> : <Bars3Icon className="w-10 h-10" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen ? <MobileNav /> : null}
        </header >
    );
};
