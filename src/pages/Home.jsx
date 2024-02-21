import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import ListGroup from "../components/ListGroup";

const Home = () => {
  const navigate = useNavigate();
  const { user, isloading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  
  useEffect(() => {
    if (!user || isError) {
      navigate("/login");
    }
  }, [user]);

  if (isloading) {
    <h1 className='text-center display-2'>Loading...........</h1>

  }
  return (
    <>
      <h1 className='text-center display-2'>This is a {user?.name}</h1>

      <Form/>
      <ListGroup/>
    </>
  );
};

export default Home;
