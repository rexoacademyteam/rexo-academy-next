import MainBanner from "@/components/home/banner";
import Layout from "@/components/layouts";

export default function Home() {
  return (
    <>
      {/* Helmet Place */}
      <Layout name="main">
        <MainBanner />
      </Layout>
    </>
  )
}
