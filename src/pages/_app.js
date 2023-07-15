import '@/styles/globals.css'
import Layout from '../../layout/Layout'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import"../components/header/header.scss"
import "../styles/darkModeSwitcher.scss"
import "../components/darkMode/darkmode.css"
import "../styles/home.scss"
import "../styles/about.scss"
import { Provider } from 'react-redux';
import store from '@/redux/store';







config.autoAddCss = true; 
export default function App({ Component, pageProps }) {

  return (

  <>
    <Provider store={store}>



  <Layout>

  <Component {...pageProps} />

  </Layout>

    </Provider>
  </>
  )
}
