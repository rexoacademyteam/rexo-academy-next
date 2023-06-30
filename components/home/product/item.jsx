import Link from "next/link";
import { useMemo } from "react"

export default function ProductItem({ photo, thumbnail, title, caption, rev, scheme, link }) {
    const rowclass = useMemo(() => {
        const base = "flex flex-col justify-center items-center lg:flex-row gap-x-8 gap-y-6 p-2 "
        if (rev)
            return base + "lg:flex-row-reverse"

        return base + "lg:flex-row"
    }, [rev]);

    const btnclass = useMemo(() => {
        const base = "mt-6 btn btn-block btn-pill "
        const specifics = {
            blue: "btn-blue",
            rose: "btn-rose",
            green: "btn-green"
        }

        return base + specifics[scheme]
    }, [scheme])

    return (
        <div className={rowclass}>
            <div className="w-full lg:w-[36rem] h-60 text-center relative">
                <img
                    src={thumbnail}
                    alt=""
                    className="w-full h-full"
                />
                <div className="absolute top-0 bottom-0 start-0 end-0 flex justify-center items-center p-8">
                    <img
                        src={photo}
                        alt=""
                        className="w-56 h-auto"
                    />

                </div>
            </div>
            <div className="w-full lg:flex-grow text-lg text-center md:text-right">
                <h1 className="text-3xl mb-6 font-semibold text-zinc-700">{title}</h1>
                <p>
                    {caption}
                </p>
                <Link href={link} className={btnclass}>
                    ثبت سفارش
                </Link>
            </div>
        </div>
    )
}
