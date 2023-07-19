import { useState } from "react";
import { BookOpenIcon, LinkIcon, QuestionMarkCircleIcon, ArrowDownOnSquareIcon, XMarkIcon, Bars3Icon, ArrowRightOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

/*
    @Info
    NOTICE: every link should start with '/' to work in everywhere
*/
const links = [
    { name: "دوره های آموزشی", href: "/courses", logo: (<BookOpenIcon className="w-6 h-6" />) },
    { name: "چرا رکسو؟", href: "/whyRexo", logo: (<QuestionMarkCircleIcon className="w-6 h-6" />) },
    { name: "ارتباط با ما", href: "/contact", logo: (<LinkIcon className="w-6 h-6" />) },
    { name: "ثبت سفارش", href: "/ordering", logo: (<ArrowDownOnSquareIcon className="w-6 h-6" />) },
]

const MobileNav = () => {
    return (
        <div className="w-full py-4 md:hidden">
            <div className="flex flex-col items-center gap-4">
                {
                    links ? links.map((link, i) => (
                        <Link key={i} href={link.href} className="ml-5 rounded-xl p-1 hover:text-[#6b36cc] cursor-pointer inline-flex hover:underline">
                            {link.logo}
                            <span className="mr-1">{link.name}</span>
                        </Link>
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
                        <Link key={i} href={link.href} className="ml-5 rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                            {link.logo}
                            <span className="mr-1">{link.name}</span>
                        </Link>
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
            <div className="flex justify-between items-center align-center max-w-7xl mx-auto">
                <div className={`flex justify-around ${isOpen ? "block" : ""}`}>
                    <button>
                        <Link className="relative inline-flex flex-shrink-0 justify-center items-center h-12 w-12 rounded-md font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="/accounts/shopping">
                            <ShoppingCartIcon className="w-6 h-6" />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center align-middle w-6 h-6 rounded-full text-xs font-medium transform -translate-y-1 translate-x-1 bg-rose-500 text-white text-center">99</span>
                        </Link>
                    </button>

                    <Link href="/accounts/login" className="mx-2 btn btn-sm btn-indigo btn-pill">
                        <ArrowRightOnRectangleIcon className="w-6 h-6" />
                        <span>ورود</span>
                    </Link>
                </div>

                <div className={`md:flex justify-around ${isOpen ? "flex" : "hidden"} w-auto`}>
                    <DesktopNav />
                </div>

                <div className="cursor-pointer flex items-center">
                    <Link href="/">
                        <img src="/assets/brand_logo.png" className="hidden w-[80px] md:block" alt="logo" />
                        <img src="/assets/brand_purelogo.png" className="md:hidden w-[50px] h-[30px]" alt="logo2" />
                    </Link>
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
