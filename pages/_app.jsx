import '@/styles/globals.css'
import Wrapper from '@/components/_wrapper'

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
