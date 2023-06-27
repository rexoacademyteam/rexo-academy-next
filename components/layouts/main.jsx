import Header from "../main/header";

export default function MainLayout ({ children }) {
    return (
        <>
            <Header />
            {children}
            {/* <Footer /> */}
        </>
    )
}
