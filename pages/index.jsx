import MainBanner from "@/components/home/banner";
import ProductSection from "@/components/home/product/section";
import Speciality from "@/components/home/speciality";
import Layout from "@/components/layouts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RexoAcademy | Home</title>
      </Head>
      <Layout name="main">
        <MainBanner />
        <Speciality/>
        <hr />
        <ProductSection/>
      </Layout>
    </>
  )
}
