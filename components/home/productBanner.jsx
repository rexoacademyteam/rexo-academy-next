const ProductBanner = () => {
  return (
    <div className="container mx-auto pt-10 mt-16">
      <div className="block md:flex md:justify-around md:align-middle p-2 md:-mt-20">
        <div className="text-center mx-auto md:ml-3">
          <img
            src="assets/photoshop-banner-bg.png"
            alt="photoshop-banner"
            className="w-[900px] m-auto"
          />
          <img
            src="assets/photoshop-banner-text.png"
            alt="photoshop-banner-text"
            className="w-[200px] m-auto relative -top-44"
          />
        </div>
        <div className="-mt-24 md:mt-10 text-lg text-center md:text-right">
          <p>
            صنعت بازی سازی یکی از مهمترین و پردرآمدترین صنایع در جهان امروز است
            و توانسته مخاطبی به بزرگی 2 میلیارد از جمعیت جهان را به خود اختصاص
            دهد، بازی سازی نه تنها در سرگرمی تاثیر گذاشته بلکه امروزه در فرهنگ
            سازی و شبکه سازی اجتماعی نیز تاثیر بسزایی گذاشته است.
          </p>
          <button className="text-white font-bold rounded-2xl bg-[#0000ff] w-full p-2 mt-6 ring-2 ring-blue-400 shadow-xl">
            ثبت سفارش
          </button>
        </div>
      </div>
      <div className=" block md:flex md:flex-row-reverse md:justify-around md:align-middle p-2 md:-mt-20">
        <div className="text-center mx-auto md:mr-3">
          <img
            src="assets/game-banner-bg.png"
            alt="game-banner"
            className="w-[900px] m-auto"
          />
          <img
            src="assets/game-banner-text.png"
            alt="game-banner-text"
            className="w-[250px] m-auto relative -top-44"
          />
        </div>
        <div className="-mt-24 md:mt-10 text-lg text-center md:text-right">
          <p>
            صنعت بازی سازی یکی از مهمترین و پردرآمدترین صنایع در جهان امروز است
            و توانسته مخاطبی به بزرگی 2 میلیارد از جمعیت جهان را به خود اختصاص
            دهد، بازی سازی نه تنها در سرگرمی تاثیر گذاشته بلکه امروزه در فرهنگ
            سازی و شبکه سازی اجتماعی نیز تاثیر بسزایی گذاشته است.
          </p>
          <button className="text-white font-bold rounded-2xl bg-[#ff0000] w-full p-2 mt-6 ring-2 ring-red-400 shadow-xl">
            ثبت سفارش
          </button>
        </div>
      </div>
      <div className="block md:flex md:justify-around md:align-middle p-2 md:-mt-20">
        <div className="text-center mx-auto md:ml-3">
          <img
            src="assets/web-banner-bg.png"
            alt="web-banner"
            className="w-[900px] m-auto"
          />
          <img
            src="assets/web-banner-text.png"
            alt="web-banner-text"
            className="w-[250px] m-auto relative -top-44"
          />
        </div>
        <div className="-mt-24 md:mt-10 text-lg text-center md:text-right">
          <p>
            صنعت بازی سازی یکی از مهمترین و پردرآمدترین صنایع در جهان امروز است
            و توانسته مخاطبی به بزرگی 2 میلیارد از جمعیت جهان را به خود اختصاص
            دهد، بازی سازی نه تنها در سرگرمی تاثیر گذاشته بلکه امروزه در فرهنگ
            سازی و شبکه سازی اجتماعی نیز تاثیر بسزایی گذاشته است.
          </p>
          <button className="text-white font-bold rounded-2xl bg-[#00ff00] w-full p-2 mt-6 ring-2 ring-green-400 shadow-xl">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
