import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Wrapper({ children }) {
    return (
        <ReduxProvider store={store}>
            {children}
            <ToastContainer />
        </ReduxProvider>
    )
}
