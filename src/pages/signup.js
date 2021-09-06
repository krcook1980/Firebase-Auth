import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useAuth } from '../utils/Auth';

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
    const { signup } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
          <Card>
              <Card.Body>
                  <h2>
                      Sign Up
                  </h2>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" id="passwordConf">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordConfRef} required/>
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Sign Up
                    </Button>
                </Form>
              </Card.Body>
            </Card>  
          <div>
              Login instead
          </div>
        </>
    )
}
