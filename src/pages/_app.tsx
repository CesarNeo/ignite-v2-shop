import { AppProps } from 'next/app'
import Image from 'next/future/image'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" priority />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
