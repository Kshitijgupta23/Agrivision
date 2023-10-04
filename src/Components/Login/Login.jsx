import React from 'react';
import "./Login.css";
import Form from "../Form/Form"

const Login = () => {
  return (
    <div className='container'>
        <div className='left'>
            {/* <div className='left_child'> */}
                <Form />
            {/* </div> */}
        </div>
        <div className='right'></div>
    </div>
  )
}

export default Login;