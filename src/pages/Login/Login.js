import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import logo from '../../Assets/images/logo2.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, logInWithEmailAndPassword, userCreateWithEmailAndPassword } from './loginManager';


const Login = () => {

  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    error: '',
    success: false,
  })
 //console.log(user);

 initializeLoginFramework();

 const {login} = useContext(UserContext);
 const [loggedInUser, setLoggedInUser] = login;

 const history = useHistory();
 const location = useLocation();

 let { from } = location.state || { from: { pathname: "/" } };


  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    //console.log(e.target.name, e.target.value);
    let isFieldValid = true;
    if(e.target.name === "email"){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(user.password && user.confirmPassword){
      if(user.password !== user.confirmPassword){
        setError("Password Does not Match");
      }
      else{
        setError(" ");
      }
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    if(newUser && user.password && user.email){
      userCreateWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      logInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    e.preventDefault();
  }


  return (
    <Container fluid={true} className="login-register">
      <Row>
        <Col lg={3} className="m-auto">
          <div className="login-register-form">
            <Link to="/">
              <img src={logo} alt="" style={{width: '100%', marginBottom: '50px'}}/>
            </Link>
             <Form onSubmit={handleSubmit}>
                {newUser && (<Form.Group className="mb-3">
                  <Form.Control name="name" onBlur={handleBlur} type="text" placeholder="Name" required/>
                </Form.Group>)
                }
                
                <Form.Group className="mb-3">
                  <Form.Control name="email" onBlur={handleBlur} type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="password" onBlur={handleBlur} type="password" placeholder="Password" required/>
                </Form.Group>
                {newUser && (<Form.Group className="mb-3">
                  <Form.Control name="confirmPassword" onBlur={handleBlur} type="password" placeholder="Confirm Password" required/>
                </Form.Group>)
                }
                <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>
                {newUser ? (<Button variant="primary" type="submit">
                  Sign Up
                </Button>
                ) : (
                  <Button variant="primary" type="submit">
                  Log In
                </Button>
                )}
             </Form>

             <p 
              onClick={() => setNewUser(!newUser)}
              style={{color: 'red', fontWeight: '400', marginTop: '20px', cursor: 'pointer'}}
             >{newUser ? 'Already have an account' : 'Create an account'}</p>

             <p style={{color: 'red', fontWeight: 'bold', marginTop: '20px'}}>{user.error}</p>
             {
               user.success && <p style={{color: 'green', fontWeight: 'bold', marginTop: '20px'}}>User {newUser ? 'Created' : 'Logged In'} Successfully.</p>
             }
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;