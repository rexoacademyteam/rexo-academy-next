import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function MainBanner() {
  return (
    <div className="pt-10 px-4 mt-6">
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between">
        <div className="flex-col justify-around mt-9">
          <p className="text-4xl font-extrabold mb-4 text-center md:text-start text-slate-800">
            برنامه نویسی رو آسون یاد بگیر!
          </p>
          <p className="text-slate-500 m-auto text-xl text-center md:text-start">
            ما کنارتون هستیم تا زمانی که به رویاهاتون برسید
          </p>
          <p className="text-slate-500 m-auto text-xl text-center md:text-start">
            آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی دائمی
          </p>
          <p className="text-slate-500 m-auto text-xl text-center md:text-start mb-4">
            با ما همراه باشید
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center align-middle px-2 gap-4">
            <button
              type="button"
              className="btn btn-indigo btn-outline btn-sm btn-pill btn-block btn-grower"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
              مشاوره!
            </button>
            <button
              type="button"
              className="btn btn-indigo btn-sm btn-pill btn-block btn-grower"
            >
              بزن بریم!
            </button>
          </div>
        </div>
        <div>
          <img
            src="/assets/main_section_banner.png"
            className="w-[400px] m-auto"
            alt="main-banner"
          />
        </div>
      </div>
    </div>
  );
}
