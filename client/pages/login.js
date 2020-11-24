import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import authContext from '../context/auth/authContext'
import Alert from '../components/Alert'
import { useRouter } from 'next/router'

const Login = () => {

  // Define context
  const AuthContext = useContext(authContext)
  const { msg, auth, initSession } = AuthContext

  // Next router
  const router = useRouter()

  useEffect(() => {    
    if(auth){
      router.push('/customers')
    }      
  }, [auth])
  

  // Form and validator with formik and yup

  const formik = useFormik({
    initialValues:{     
      email: '',
      password: ''
    },
    validationSchema: Yup.object({      
      email: Yup.string().email('Email no vàlid').required('Email es obligatori'),
      password: Yup.string().required('Password obligatori')
    }),
    onSubmit: values => {     
      initSession(values)
    }
  })

  return ( 

    <Layout>
      <div className="md:w4/5 xl:w3/5 mx-auto mb-32">
          <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Iniciar sessió</h2>
       
          { msg && <Alert /> }         

          <div className="flex justify-center mt-5">
              <div className="w-full max-w-lg">
                  <form
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                    onSubmit={formik.handleSubmit}
                  >
                      <div className="mb-4">
                        <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                            type="email"
                            className="shadow apperance-one border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                            id="email"
                            placeholder="Correu d'usuari"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        { formik.touched.email && formik.errors.email ? 
                          (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                              <p className="font-bold">Error</p>
                              <p>{formik.errors.email}</p>
                            </div>  
                          ) : null
                        }

                      </div>

                      <div className="mb-4">
                        <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                            type="password"
                            className="shadow apperance-one border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                            id="password"
                            placeholder="Contrasenya d'usuari"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        { formik.touched.password && formik.errors.password ? 
                          (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                              <p className="font-bold">Error</p>
                              <p>{formik.errors.password}</p>
                            </div>  
                          ) : null
                        }

                      </div>

                      <input
                        type="submit"
                        className="btn bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold rounded"
                        value="Iniciar Sessió"
                      />

                  </form>
              </div>
          </div>
      </div>
    </Layout>
    
  );
}
 
export default Login;
