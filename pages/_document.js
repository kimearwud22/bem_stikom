import { Scripts } from "@/components/home/utils/Scripts";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script src="@/public/home/js/script.js" />
        <script src="@/public/home/js/core.min.js" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
       
      </body>
    </Html>
  );
}
