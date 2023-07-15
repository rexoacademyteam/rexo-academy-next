import { ClockIcon, CubeIcon, CurrencyDollarIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const SpecialityItem = ({ title, icon }) => {
  return (
    <div className="relative w-1/2 md:w-[12rem]">
      <div
        className="hover:rotate-6 transform transition duration-300 border-2 border-transparent w-4/5 mx-auto bg-white hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col
                items-center justify-center py-6">
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span className="flex justify-center h-full w-full">{icon}</span>
        </div>
        <h1 className="font-bold">{title}</h1>
      </div>
        <div className="-z-50 absolute top-0 bottom-0 start-0 end-0">
            <div className="w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full blur-2xl opacity-70"></div>
        </div>
    </div>
  )
}

const Speciality = () => {
  return (
      <>
        <div className="flex flex-wrap justify-center pt-14 pb-10">
          <SpecialityItem title="کاربردی و پروژه محور" icon={<CubeIcon className="w-12 h-12 m-auto" />} />
          <SpecialityItem title="ویدیو کوتاه" icon={<ClockIcon className="w-12 h-12 m-auto" />} />
          <SpecialityItem title="تضمین کیفیت" icon={<ShieldCheckIcon className="w-12 h-12 m-auto" />} />
          <SpecialityItem title="پشتیبانی همیشگی" icon={<UserGroupIcon className="w-12 h-12 m-auto" />} />
          <SpecialityItem title="تضمین بازگشت وجه" icon={<CurrencyDollarIcon className="w-12 h-12 m-auto" />} />
        </div>
        <hr />
    </>
  )
}

export default Speciality;
