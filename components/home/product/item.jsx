import Link from "next/link";
import { useMemo } from "react"

export default function ProductItem({ thumbnail, title, caption, rev, scheme, link }) {
    const rowclass = useMemo(() => {
        const base = "flex flex-col justify-center items-center lg:flex-row gap-x-8 gap-y-6 p-2 "
        if (rev)
            return base + "lg:flex-row-reverse"

        return base + "lg:flex-row"
    }, [rev]);

    return (
        <div className={rowclass}>
            <div className="w-[24rem] h-auto lg:w-[36rem] lg:h-60 text-center relative flex justify-center">
                <img
                    src={thumbnail}
                    alt=""
                    className="w"
                />
            </div>
            <div className="w-full lg:flex-grow text-lg text-center lg:text-start">
                <h1 className="text-3xl mb-6 font-semibold text-zinc-700">{title}</h1>
                <p>
                    {caption}
                </p>
                <Link href={link} className="mt-6 btn btn-indigo btn-block btn-pill">
                    ثبت سفارش
                </Link>
            </div>
        </div>
    )
}
