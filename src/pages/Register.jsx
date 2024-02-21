import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user,isError, isSuccess ,message} = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return toast.warn("password Not Match", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    dispatch(register(formData));
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
  }, [user, isSuccess, isError, message]);

  return (
    <>
      <h1 className='text-center display-2'>This is a Register Page</h1>
      <form
        className='my-5'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          className='form-control my-2 rounded-0 w-100'
          placeholder='Enter Name Here'
          required
        />
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
        <input
          type='password'
          name='password2'
          value={password2}
          onChange={handleChange}
          className='form-control my-2 rounded-0 w-100'
          placeholder='Confirm Password'
          required
        />
        <button className='btn btn-success w-100 rounded-0 text-light'>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
