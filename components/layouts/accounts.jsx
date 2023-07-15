import Link from "next/link";

export default function AccountsLayout({ children }) {
    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-full h-screen">
            <div className="container mx-auto max-w-7xl py-8 px-2">
                <div className="flex justify-start">
                    <Link href="/" className="btn btn-yellow">بازگشت</Link>
                </div>
                <div className="px-2 py-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
