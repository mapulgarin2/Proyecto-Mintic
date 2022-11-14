// import logo from './logo.svg'
import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login/login';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <Container>
        <Login />
      </Container>
    </div>
  )
}

export default App
