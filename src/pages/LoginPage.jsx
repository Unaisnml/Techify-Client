import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    const initialValues = {
        email: "",
        password: "",
      };
  return (
    <section className="flex items-center justify-center mx-auto my-16 pb-16 pt-8 rounded-lg w-1/3">
        <LoginForm initialValues={initialValues}/>
    </section>
  )
}

export default LoginPage