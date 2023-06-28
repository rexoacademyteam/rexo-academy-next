import { ClockIcon, CubeIcon, CurrencyDollarIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const SpecialityItem = ({ title, icon }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-[12rem]">
      <div
        className="w-full hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col
                items-center justify-center py-6"
      >
        <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
          <span className="flex justify-center h-full w-full">{icon}</span>
        </div>
        <span className="font-bold">{title}</span>
      </div>
    </div>
  )
}

const Speciality = () => {
  return (
    <div className="flex flex-wrap justify-center pt-14 pb-10">
      <SpecialityItem title="کاربردی و پروژه محور" icon={<CubeIcon className="w-12 h-12 m-auto" />} />
      <SpecialityItem title="ویدیو کوتاه" icon={<ClockIcon className="w-12 h-12 m-auto" />} />
      <SpecialityItem title="تضمین کیفیت" icon={<ShieldCheckIcon className="w-12 h-12 m-auto" />} />
      <SpecialityItem title="پشتیبانی همیشگی" icon={<UserGroupIcon className="w-12 h-12 m-auto" />} />
      <SpecialityItem title="تضمین بازگشت وجه" icon={<CurrencyDollarIcon className="w-12 h-12 m-auto" />} />
    </div>
  );
};

export default Speciality;
