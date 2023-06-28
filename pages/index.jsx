import MainBanner from "@/components/home/banner";
import Speciality from "@/components/home/speciality";
import Layout from "@/components/layouts";

export default function Home() {
  return (
    <>
      {/* Helmet Place */}
      <Layout name="main">
        <MainBanner />
        <Speciality/>
      </Layout>
    </>
  )
}
