import { Button, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React,{useState} from 'react'
import * as Yup from 'yup'
import { LoginUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const initialValues={email: "", password: ""};
const validationSchema=Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const [formValue, setFormValue]=useState()
  const [errorMessage, setErrorMessage] = useState(""); // State to manage error message
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleSubmit=(values)=>{
    console.log("yo chai handle submit", values);
    if (values.email === "abcd@gmail.com") {
      setErrorMessage("User does not exist");
      setFormValue({ ...values, email: "", password: "" }); 
    } else if (values.password === "1234567890") {
      setErrorMessage("Password is incorrect");
      setFormValue({ ...values, password: "" }); 
    } else {
      setErrorMessage("");
      dispatch(LoginUserAction({data:values}));
    }
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Form className='space-y-5'>
            {errorMessage && (
              <div className='text-red-500'>{errorMessage}</div>
            )}
            <div className='space-y-5'>
              <div>
                <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
                <ErrorMessage name="email" component={"div"} className='text-red-500' />
              </div>
              <div>
                <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
                <ErrorMessage name="password" component="div" className='text-red-500' />
                {errors.password && touched.password && (
                  <div className='text-red-500'>{errors.password}</div>
                )}
              </div>
            </div>
            <Button sx={{padding:".8rem 0rem"}} fullWidth type="submit" variant='contained' color="primary">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <div className='flex gap-2 items-center justify-center pt-5'>
        <p>If you don't have an account?</p>
        <Button onClick={()=>navigate("/register")}>Register</Button>
      </div>
    </>
  );
}

export default Login;
