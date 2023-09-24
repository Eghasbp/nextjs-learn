import '@/styles/globals.css'

import {
  Inter,
  Roboto_Condensed,
  Ubuntu_Mono,
} from 'next/font/google'


const roboto_c = Roboto_Condensed({
  subsets:['latin'],
  weight:['400','700']
});

const inter = Inter({
  subsets:['latin'],
  weight:['300','400','700']
})

const ubuntu_m = Ubuntu_Mono({
  subsets:['latin'],
  weight:['400','700']
})

export default function App({ Component, pageProps }) {
  return (
    <>
    {
      `
      :root{
        --font-inter: ${inter.style.fontFamily}
        --font-roboto_c: ${roboto_c.style.fontFamily}
        --font-mono: ${ubuntu_m.style.fontFamily}
      }
      `
    }
    <Component {...pageProps} />
    </>
  ) 
}
