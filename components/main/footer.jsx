import {
  BookOpenIcon,
  LinkIcon,
  QuestionMarkCircleIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "دوره های آموزشی",
    href: "#",
    logo: <BookOpenIcon className="w-6 h-6" />,
  },
  {
    name: "چرا رکسو؟",
    href: "#",
    logo: <QuestionMarkCircleIcon className="w-6 h-6" />,
  },
  { name: "ارتباط با ما", href: "#", logo: <LinkIcon className="w-6 h-6" /> },
  {
    name: "ثبت سفارش",
    href: "#",
    logo: <ArrowDownOnSquareIcon className="w-6 h-6" />,
  },
];
export default function Footer() {
  return (
    <div className="bg-gray-100 rounded-tl-2xl rounded-tr-2xl h-auto">
      <div className="block md:flex md:justify-around md:align-middl container mx-auto pt-6 pb-6">
        <div className="flex-col justify-around align-middle">
          <div className="flex justify-around align-middle">
            <div className="">
              <img
                src="assets/brand_logo.png"
                alt="brand-logo"
                className="w-28 h-16"
              />
            </div>
            <div className="flex-col justify-around align-middle mr-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-3">
                آکادمی رکسو
              </h1>
              <p>آموزش برنامه نویسی | فوتوشاپ | پروژه محور | پشتیبانی دائمی</p>
            </div>
          </div>
          <div className="w-auto p-3 md:w-[450px] mt-5">
            <p className="text-sm">
              هدف آکادمی رکسو ارائه بهترین دوره های آموزش برنامه نویسی و فوتوشاپ به
              دانشجویان برای ورود به بازار کار است و برای رسیدن به این هدف یک
              سری استانداردها تعیین شده و به صورت سختگیرانه روی دوره ها اعمال
              میشود. این استاندار ها شامل تدریس سلیس و روان برای انتقال مفاهیم
              در کنار کامل و جامع بودن دوره ها است به صورتی که با دیدن یک دوره
              به سطح مناسب و حرفه ای برسید. همچنین دوره ها پروژه محور هستند تا
              کاربرد مفاهیمی که یاد میگیرید را درک کنید و اگر احیانا ابهامی پیش
              آید میتوانید از پشتیبانی دائمی‌ ما استفاده کنید و سوال هایتان را
              بپرسید. و در آخر به یکی از مهم ترین ویژگی دوره ها اشاره میکنم و آن
              هم آپدیت و بروز بودن آن ها مطابق آخرین تکنولوژی ها میباشد.
            </p>
          </div>
        </div>
        <div>
          <div className="w-full py-4">
            <div className="flex flex-col gap-4">
                <p className="text-center font-bold text-gray-800 text-lg border-b-2 border-gray-700 rounded-xl">بخش های سایت</p>
               
              {links
                ? links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className=" rounded-xl pr-3 md:p-1 hover:text-[#6b36cc] cursor-pointer inline-flex"
                    >
                      {link.logo}
                      <span className="mr-1">{link.name}</span>
                    </a>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div>گلدون 2</div>
      </div>
    </div>
  );
}
