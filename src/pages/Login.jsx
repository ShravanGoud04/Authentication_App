import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess,message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    if (isError&&message) {
      toast.error(message)
    }
    if (!user&&isError) {
      dispatch(reset())
    }
  }, [user,isSuccess,isError,message]);
  return (
    <>
      <h1 className='text-center display-2'> Login Here</h1>
      <form
        className='my-5'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          className='form-control my-2 rounded-0 w-100'
          placeholder='Enter Email Here'
          required
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          className='form-control my-2 rounded-0 w-100'
          placeholder='Enter Password Here'
          required
        />
        <button className='btn btn-success w-100 rounded-0 text-light'>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
