import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/signup';
import { Container } from 'react-bootstrap';



function App() {
 return (
   <AuthProvider> 
  <Container className="d-flex align-items-center justify-content-center" >
    <div className="w-100" style={{maxWidth: "400px"}}>

    <Signup />
    </div>
  </Container>
  </AuthProvider>
 )
}

export default App;
