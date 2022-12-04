import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../features/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClientProvider,QueryClient} from "react-query"
import LayOut from '../components/LayOut';
const client=new QueryClient()
function MyApp({ Component, pageProps }) {
  return (
  <QueryClientProvider client={client}>

  <Provider store={store}>
<LayOut>

  <Component {...pageProps} />
</LayOut>
  </Provider>
  </QueryClientProvider>
  )
}

export default MyApp
