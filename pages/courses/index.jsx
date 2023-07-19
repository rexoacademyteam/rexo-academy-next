import MainLayout from "@/components/layouts/main";
import { useState } from "react";
import Tabs from "@/components/core/tabs";
import Tab from "@/components/core/tabs/tab";

const Courses = () => {
  const [tab, setTab] = useState(1);

  const clickHandler = (i) => {
    // WTF getElementById in React ?
    setTab(i)
  };

  return (
    <MainLayout>
      <h1 className="text-gray-700 font-bold text-center text-2xl my-6">
        دوره های آموزشی
      </h1>

        <Tabs>
            <Tab title="test">
                test
            </Tab>
            <Tab title="web">
                web
            </Tab>
            <Tab title="a">
                A
            </Tab>
        </Tabs>
    </MainLayout>
  );
};

export default Courses;