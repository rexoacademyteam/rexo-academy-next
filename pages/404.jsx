import Layout from "@/components/layouts";

const NotFound = () => {
   return (
      <Layout>
         <div className="text-center my-10">
            <div className="w-full flex justify-center">
               <img src="/assets/404.png" alt="404 page" className="w-full md:w-[30em] my-14 mx-12 md:mx-0" />
            </div>
            <button className="btn-indigo btn-lg mx-auto mb-6"><a href="/">بازگشت به صفحه اصلی</a></button>
         </div>
      </Layout>
   );
}

export default NotFound;
