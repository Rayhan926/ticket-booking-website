import "swiper/css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-tippy/dist/tippy.css";
import "../styles/globals.css";
import Script from "next/script";
import DefaultLayout from "@layouts/DefaultLayout";
import { Provider } from "react-redux";
import store from "@state";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL-bwYmXMyQ9yyATcDndwbyACVPJRN-b0&libraries=places"
        defer
      />

      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>
  );
}

export default MyApp;
