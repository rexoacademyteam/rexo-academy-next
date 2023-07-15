import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Ordering = () => {
  const router = useRouter()

  const handleBack = () => {
    // TODO: check if user is not navigated from home
    router.back();
  }

  const clickHandler = (e) => {
    e.preventDefault();
    toast.success("درخواست شما ثبت شد", {
      position: "top-center",
      className: "rtl font-fa font-semibold"
    });

  }

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-full h-screen py-6 px-2 md:px-6">
        <div className="container mx-auto max-w-7xl my-4">
          <div className="flex justify-start">
            <button onClick={handleBack} className="btn btn-yellow">بازگشت</button>
          </div>
        </div>
        <div className="w-full md:w-[600px] h-auto mx-auto p-4 pb-2 bg-white rounded-xl">
          <h1 className="text-gray-700 font-bold text-center text-2xl">
            ثبت سفارش
          </h1>

          <form className="w-full mt-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-username"
                >
                  نام کاربری
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-username"
                  type="text"
                  placeholder="John"
                />
              </div> */}
              {/* <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  پسورد
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="*******"
                />
              </div> */}
            </div>
            <div className="flex flex-wrap flex-col -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="label"
                  htmlFor="grid-telephone"
                >
                  شماره تلفن
                </label>
                <input
                  className="input text-left"
                  id="grid-telephone"
                  type="text"
                  placeholder="09123456789"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="label"
                  htmlFor="grid-email"
                >
                  ایمیل
                </label>
                <input
                  className="input text-left"
                  id="grid-email"
                  type="email"
                  placeholder="test@gmail.com"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="label"
                  htmlFor="grid-textarea"
                >
                  متن پیام
                </label>
                <textarea
                  name=""
                  id="grid-textarea"
                  className="w-full resize-none input" placeholder="سفارش من ..."
                ></textarea>
              </div>
              <div className="w-full px-3">
                <button className="btn-lg btn-indigo w-full" onClick={clickHandler}>ثبت درخواست</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ordering;
