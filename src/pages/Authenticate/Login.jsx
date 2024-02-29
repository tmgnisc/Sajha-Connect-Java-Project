import { Button, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik'
import React,{useState} from 'react'
import * as Yup from 'yup'
import { LoginUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';


const initialValues={email: "", password: ""};
const validationSchema={email:Yup.string().email("Invalid email").required("Email is required"), password:Yup.string().min(6, "Passwored must be at least 6 character").required("password is required"), };

const Login = () => {
  const[formValue, setFormValue]=useState()
  const dispatch= useDispatch();


const handleSubmit=(values)=>{
  console.log("yo chai handle submit", values)
  dispatch(LoginUserAction({data:values}))
}
  return (
  <>
  <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    <Form className='space-y-5'>
      <div className='space-y-5'>
        <div>
          <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />

     <ErrorMessage name="email" component={"div"} className='text-red-500' />
        </div>
        <div>
          <Field as={TextField} name="password" placeholder="password" type="password" variant="outlined" fullWidth />

     <ErrorMessage name="password" component="div" className='text-red-500' />
        </div>
      </div>
     <Button sx={{padding:".8rem 0rem"}} fullWidth type="submit" variant='contained' color="primary">Login</Button>
    </Form>
  

  </Formik>
  </>
  )
}

export default Login;
