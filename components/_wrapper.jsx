import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/store"

export default function Wrapper({ children }) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}
