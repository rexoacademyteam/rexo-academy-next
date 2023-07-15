

// TODO: add glowy effects & some more features

/*
* Paper (params)
*  @param ReactNode
*  @return ReactNode
*/
const Paper = ({ children }) => {
    return (
        <div className="relative">
            <div className="my-12 px-4 py-3 rounded-xl shadow-xl bg-slate-100">
                {children}
            </div>
            <div className="absolute -top-10 -bottom-10 -start-10 -end-10 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-2xl -z-40 blur-3xl opacity-20"></div>
        </div>
    )
}

export default Paper