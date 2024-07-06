import "@/styles/globals.css";
import Layout from "../../layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../components/header/header.scss";
import "../components/footer/footer.scss";
import "../styles/darkModeSwitcher.scss";
import "../components/darkMode/darkmode.css";
import "../styles/home.scss";
import "../styles/about.scss";
import "../styles/contact.scss";
import "../components/miniChat/chat.scss";
import "../components/UI/oclok/oclok.scss";
import"react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ToastContainer } from "react-toastify";

config.autoAddCss = true;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
        </Layout>
      </Provider>
    </>
  );
}
