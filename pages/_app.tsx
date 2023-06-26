import { store,} from "@/app/store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import '@/app/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  return <Provider store={store}>
    <div className="container">
      <Component {...pageProps} />
    </div>
  </Provider>
}

export default MyApp