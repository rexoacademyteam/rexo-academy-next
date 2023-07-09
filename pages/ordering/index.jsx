import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Ordering = () => {
    const clickHandler = (e) => {
        e.preventDefault();
        toast.success("درخواست شما ثبت شد");
        position: toast.POSITION.TOP_RIGHT
    }
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-full h-full p-6">
      <div className="w-[300px] md:w-[400px] h-auto mx-auto p-4 pb-2 bg-white rounded-xl">
        <h1 className="text-gray-700 font-bold text-center text-lg">
          ثبت سفارش
        </h1>

        <form className="w-full max-w-lg mt-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            </div>
            <div className="w-full md:w-1/2 px-3">
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
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-telephone"
              >
                شماره تلفن
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-telephone"
                type="text"
                placeholder="09123456789"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                ایمیل
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="test@gmail.com"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-textarea"
              >
                متن پیام
              </label>
              <textarea
                name=""
                id="grid-textarea"
                className="w-full resize-none appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="سفارش من ..."
              ></textarea>
            </div>
            <div className="w-full px-3">
            <button className="btn-lg btn-indigo w-full" onClick={clickHandler}>ثبت درخواست</button>
            <ToastContainer/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ordering;
