import '../styles/globals.css'
import "../styles/styles.scss"
import AuthState from '../context/auth/authState'
import CustomerState from '../context/customer/customerState'
import ProductState from '../context/product/productState'

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <CustomerState>
        <ProductState>
          <Component {...pageProps} />
        </ProductState>
      </CustomerState>
    </AuthState>    
  )
}

export default MyApp

