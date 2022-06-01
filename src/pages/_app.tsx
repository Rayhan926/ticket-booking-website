import "swiper/css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../styles/globals.css";
import Script from "next/script";
import DefaultLayout from "@layouts/DefaultLayout";
import { Provider } from "react-redux";
import store from "@state";
import { CustomNextPage } from "@config/types";

function MyApp({ Component, pageProps }: CustomNextPage) {
  const headerType = Component?.headerType;
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL-bwYmXMyQ9yyATcDndwbyACVPJRN-b0&libraries=places"
        defer
      />

      <Provider store={store}>
        <DefaultLayout headerType={headerType}>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>
  );
}

export default MyApp;
