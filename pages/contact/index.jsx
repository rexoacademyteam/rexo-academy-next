import MainLayout from "@/components/layouts/main";

const contactWays = [
  { image: "assets/instagram.png", title: "اینستاگرام", href: "" },
  { image: "assets/youtube.webp", title: "یوتیوب", href: "",  },
  { image: "assets/telegram.webp", title: "کانال تلگرام", href: "" },
  { image: "assets/github.png", title: "گیت هاب", href: "" },
  { image: "assets/call.png", title: "تماس", href: "" },
  { image: "assets/gmail.png", title: "ایمیل", href: "" },
];

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="container mx-auto grid sm:grid-cols-3 sm:grid-rows-2 gap-2 text-center">
        {contactWays.map((contactWay) => (
          <a href={contactWay.href} key={contactWay.title}>
            <div className="text-center flex flex-col justify-around align-middle p-3 mt-5 hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50 hover:rotate-6">
              <div className="w-28 h-28 m-auto p-1">
                <img src={contactWay.image} alt="contactWayImage"/>
              </div>
              <p className="text-gray-700 font-bold text-center mt-4">{contactWay.title}</p>
            </div>
          </a>
        ))}
      </div>
    </MainLayout>
  );
};

export default ContactUs;