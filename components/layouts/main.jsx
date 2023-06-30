import Footer from "../main/footer";
import Header from "../main/header";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
