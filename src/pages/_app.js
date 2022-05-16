import { Provider } from 'react-redux';
import ScrollToTop from 'react-scroll-up';
import store from '../redux/store';
import '../styles/globals.scss';
import { RiArrowUpSLine } from 'react-icons/ri'


function MyApp({ Component, pageProps }) {

  const topIcon = <RiArrowUpSLine size="35px" color='white' />
  return (
    <>
      <ScrollToTop style={{
        position: 'fixed',
        bottom: 50,
        right: 30,
        cursor: 'pointer',
      }} showUnder={220}>
        <div className='bg-[#0ab9f2] rounded-[50%] p-3'>{topIcon}</div>
      </ScrollToTop>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
