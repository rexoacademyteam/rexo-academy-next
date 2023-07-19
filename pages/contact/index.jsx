import MainLayout from "@/components/layouts/main";
import Link from "next/link";

const contactWays = [
  { image: "assets/instagram.png", title: "اینستاگرام", href: "" },
  { image: "assets/youtube.webp", title: "یوتیوب", href: "", },
  { image: "assets/telegram.webp", title: "کانال تلگرام", href: "" },
  { image: "assets/github.png", title: "گیت هاب", href: "" },
  { image: "assets/call.png", title: "تماس", href: "" },
  { image: "assets/gmail.png", title: "ایمیل", href: "" },
];

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="container mx-auto flex flex-wrap justify-center items-center w-9/12 gap-8 pt-8 pb-28 md:py-28">
        {contactWays.map((contactWay) => (
          <Link className="relative w-[200px]" href={contactWay.href} key={contactWay.title}>
            <div className="text-center flex flex-col justify-around align-middle p-2 mt-5 hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50 hover:rotate-3 transform transition duration-300 rounded-xl bg-gray-100">
              <div className="w-[100px] h-[100px] m-auto p-1 flex justify-center items-end">
                <img className="" src={contactWay.image} alt="contactWayImage" />
              </div>
              <p className="text-gray-700 font-bold text-center mt-4">{contactWay.title}</p>
            </div>
            <div className="-z-50 absolute top-0 bottom-0 start-0 end-0">
              <div className="w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full blur-2xl opacity-70"></div>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default ContactUs;
