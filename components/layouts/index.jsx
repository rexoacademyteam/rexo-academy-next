import AccountsLayout from "./accounts";
import MainLayout from "./main";

const layouts = {
    main: MainLayout,
    accounts: AccountsLayout,

}

export default function Layout({ children, name }) {
    const TargetLayout = layouts[name ?? "main"];

    return (
        <TargetLayout>
            {children}
        </TargetLayout>
    )
}
