import ProductItem from "./item";

const texts = {
    game: {
        caption: `صنعت بازی سازی یکی از مهمترین و پردرآمدترین صنایع در جهان امروز است
        و توانسته مخاطبی به بزرگی 2 میلیارد از جمعیت جهان را به خود اختصاص
        دهد، بازی سازی نه تنها در سرگرمی تاثیر گذاشته بلکه امروزه در فرهنگ
        سازی و شبکه سازی اجتماعی نیز تاثیر بسزایی گذاشته است.`
    }
}

export default function ProductSection() {
    return (
        <div className="container mx-auto py-2 my-8">
            <div className="flex flex-col gap-8">
                <ProductItem link="/courses/edit" scheme="blue" title="آموزش فوتوشاپ" photo="/assets/photoshop-banner-text.png" thumbnail="/assets/photoshop-banner-bg.png" caption={texts.game.caption} />
                <ProductItem rev link="/courses/web" scheme="green" title="آموزش طراحی وبسایت" photo="/assets/web-banner-text.png" thumbnail="/assets/web-banner-bg.png" caption={texts.game.caption} />
                <ProductItem link="/courses/game" scheme="rose" title="آموزش ساخت بازی" photo="/assets/game-banner-text.png" thumbnail="/assets/game-banner-bg.png" caption={texts.game.caption} />
            </div>
        </div>
    )
}
