import MainLayout from "@/components/layouts/main";
import { useState } from "react";

const Courses = () => {
  const [tab, setTab] = useState(null);

  const clickHandler = (e) => {
    
    const activeTab = e.target.id;
    if (tab) {
      document.getElementById(tab).classList.remove("activeTab");
    }
    setTab(activeTab);
    e.target.classList.add("activeTab");
  };

  return (
    <MainLayout>
      <h1 className="text-gray-700 font-bold text-center text-2xl my-6">
        دوره های آموزشی
      </h1>

      {/* Tabs */}
      <div className="flex justify-around  w-3/4 mx-auto rounded-2xl border-2 border-indigo-500 ring-2 ring-indigi-400 mb-16">
        <div
          onClick={clickHandler}
          className="text-center text-lg p-3 transition-all text-gray-700 font-bold w-full hover:bg-indigo-500 hover:text-white overflow-hidden rounded-r-xl"
          id="tab web"
        >
          وب
        </div>
        <div
          onClick={clickHandler}
          className="text-center text-lg p-3 transition-all text-gray-700 font-bold border-x-2 border-x-gray-300 w-full hover:bg-indigo-500 hover:text-white"
          id="tab photoshop"
        >
          فوتوشاپ
        </div>
        <div
          onClick={clickHandler}
          className="text-center text-lg p-3 transition-all text-gray-700 font-bold w-full hover:bg-indigo-500 hover:text-white overflow-hidden rounded-l-xl"
          id="tab game"
        >
          بازی سازی
        </div>
      </div>

      {/* courses */}
      <div className="container mx-auto">
        <div className="grid-cols-12 gap-3">
          
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
