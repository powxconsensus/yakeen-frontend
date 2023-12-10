import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import crypto from "crypto";

export default function App({ Component, pageProps }: AppProps) {
  const app_id = BigInt(
    parseInt(crypto.randomBytes(20).toString("hex"), 16)
  ).toString();
  console.log(app_id);


  return (<AnonAadhaarProvider _appId={app_id}>
    <Component {...pageProps} />
    </AnonAadhaarProvider>
     )
}
