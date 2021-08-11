import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import ReduxProvider from '../components/ReduxProvider';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Link from 'next/link'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ReduxProvider>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
        <Component {...pageProps} />
      </ReduxProvider>
    </Provider>
  )
}
export default MyApp
