import '@/styles/globals.css'
import Wrapper from '@/components/_wrapper'
import axios from 'axios'
import { publicRuntimeConfig } from '@/next.config'

axios.defaults.baseURL = publicRuntimeConfig.BASEAPI

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
