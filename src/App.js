<<<<<<< HEAD
// import logo from './logo.svg'
import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login/login';
import Menu from './components/navbar/navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
=======
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Container} from 'react-bootstrap';

>>>>>>> 7d88dabd2768aa5eb13c8e6aea8f84117bef522d

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Container>
        <Menu />
        <Login />
      </Container>
    </div>
  )
=======
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>  
    
  </div>
  );
>>>>>>> 7d88dabd2768aa5eb13c8e6aea8f84117bef522d
}

export default App
