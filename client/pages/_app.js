import '../styles/globals.css'
import "../styles/styles.scss"
import AuthState from '../context/auth/authState'
import CustomerState from '../context/customer/customerState'

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <CustomerState>
        <Component {...pageProps} />
      </CustomerState>
    </AuthState>    
  )
}

export default MyApp

