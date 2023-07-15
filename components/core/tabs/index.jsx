import {Children, useState} from "react";
import Tab from "@/components/core/tabs/tab";

const Tabs = ({ children, defaultActive }) => {
    const activeKey = useState(defaultActive ?? 0)

    return (
            <div className="flex justify-around  w-3/4 mx-auto rounded-2xl border-2 border-indigo-500 ring-2 ring-indigi-400 mb-16">
                {Children.toArray(children).map((child, i) => (
                    <Tab key={i} pk={i}>
                        {JSON.stringify(child)}
                    </Tab>
                ))}
            </div>
    )
}

export default Tabs