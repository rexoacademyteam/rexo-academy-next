import Layout from "@/components/layouts";
import { publicRuntimeConfig } from "@/next.config";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function LoginPage() {
    const router = useRouter()
    const ref = useRef()
    const [captcha, setCaptcha] = useState()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        async onSubmit(data) {
            const payload = { ...data, _captcha: captcha }
            try {
                const resp = await axios.post("/api/auth/login/", payload)
                console.log(resp.data);
                router.push("/")
            } catch(error) {
                ref.current.resetCaptcha();
            }
        }
    })

    const onLogin = (data) => {
    }

    return (
        <Layout name="accounts">
            <div className="flex justify-center py-4 px-4">
                <div className="w-full md:w-96 bg-slate-100 shadow-lg rounded-xl px-4 py-4">
                    <h1 className="text-center text-4xl">ورود</h1>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 pt-6">
                        <input name="username" onBlur={formik.onBlur} onChange={formik.handleChange} type="text" className="input text-center" placeholder="نام کاربری/ایمیل" />
                        <input name="password" onBlur={formik.onBlur} onChange={formik.handleChange} type="password" className="input text-center" placeholder="رمز عبور" />
                        <div className="flex justify-center">
                            <HCaptcha ref={ref} size="normal"  sitekey={publicRuntimeConfig.CAPTCHA_SITEKEY} onVerify={key => setCaptcha(key)} />
                        </div>
                        <button className="btn btn-indigo text-lg py-2" type="submit">
                            ورود
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
