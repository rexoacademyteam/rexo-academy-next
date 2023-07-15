import {Children, Fragment, useState} from "react";
import React from "react";
const TabNav = () => {}

const Tabs = ({ children, defaultActive=0 }) => {
    const [activeKey, setactiveKey] = useState(defaultActive ?? 0)

    return (
        <div>
            <div className="flex justify-around gap-2 w-3/4 mx-auto rounded-2xl border-2 border-indigo-500 ring-2 ring-indigi-400 mb-16">
                {Children.toArray(children).map((child, i) => (
                    <div
                        key={i}
                        onClick={() => setactiveKey(i)}
                        className={`cursor-pointer text-center text-lg p-3 transition-all  font-bold w-full  overflow-hidden rounded-xl ${(activeKey == i) ? "bg-indigo-500 text-white" : "text-gray-700 hover:bg-indigo-500 hover:text-white"}`}
                    >
                        {child.props.title}
                    </div>
                ))}
            </div>
            <div className="flex justify-around gap-2 w-3/4 mx-auto mb-8">
                {Children.toArray(children).map((child, i) => {
                    if (i == activeKey) {
                        return (<Fragment key={i}>{child.props.children}</Fragment>)
                    }
                    return (<Fragment key={i}></Fragment>)
                })}
            </div>
        </div>
    )
}

export default Tabs
