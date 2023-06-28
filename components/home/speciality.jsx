import {} from "@heroicons/react/24/outline";

const Speciality = () => {
  return (
    <div className="my-12 sm:my-16 grid grid-cols-11 gap-4 md:gap-6 container md:max-w-screen-xl">
      <div
        className="hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col 
                       items-center justify-center col-span-5 sm:col-span-3 md:col-span-2"
      >
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span></span>
        </div>
        <span className="font-bold">کاربردی و پروژه محور</span>
      </div>
      <div
        className="hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col 
                       items-center justify-center col-span-5 sm:col-span-3 md:col-span-2"
      >
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span></span>
        </div>
        <span className="font-bold">ویدیو کوتاه</span>
      </div>
      <div
        className="hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col 
                       items-center justify-center col-span-5 sm:col-span-3 md:col-span-2"
      >
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span></span>
        </div>
        <span className="font-bold">تضمین کیفیت</span>
      </div>
      <div
        className="hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col 
                       items-center justify-center col-span-5 sm:col-span-3 md:col-span-2"
      >
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span></span>
        </div>
        <span className="font-bold">پشتیبانی همیشگی</span>
      </div>
      <div
        className="hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col 
                       items-center justify-center col-span-5 sm:col-span-3 md:col-span-2"
      >
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span></span>
        </div>
        <span className="font-bold">تضمین بازگشت وجه</span>
      </div>
    </div>
  );
};

export default Speciality;
