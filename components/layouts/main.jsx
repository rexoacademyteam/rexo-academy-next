import Footer from "../main/footer";
import Header from "../main/header";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
            <Footer />
        </>
    )
}
