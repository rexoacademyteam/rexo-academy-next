import MainLayout from "@/components/layouts/main";

const NotFound = () => {
    return ( 
        <MainLayout>
           <div className="text-center">
           <img src="./assets/404.png" alt="404 page" className="w-[600px] mx-auto text-center my-7" />
            <button className="btn-indigo btn-lg mx-auto mb-6"><a href="/">بازگشت به صفحه اصلی</a></button>
           </div>
        </MainLayout>
     );
}
 
export default NotFound;