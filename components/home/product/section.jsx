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
        <div className="py-2 my-8">
            <div className="flex flex-col gap-12">
                <ProductItem link="/courses/edit" scheme="blue" title="آموزش فوتوشاپ" thumbnail="/assets/products/photoshop.png" caption={texts.game.caption} />
                <ProductItem rev link="/courses/web" scheme="green" title="آموزش طراحی وبسایت" thumbnail="/assets/products/web.png" caption={texts.game.caption} />
                <ProductItem link="/courses/game" scheme="rose" title="آموزش ساخت بازی" thumbnail="/assets/products/game.png" caption={texts.game.caption} />
            </div>
        </div>
    )
}
