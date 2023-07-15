const TabView = ({ name, onClick, children }) => {
    return (
        <div
            onClick={onClick}
            className="text-center text-lg p-3 transition-all text-gray-700 font-bold w-full hover:bg-indigo-500 hover:text-white overflow-hidden rounded-r-xl"
            id="tab web"
        >
            {name}
        </div>
    )
}

export default  TabView