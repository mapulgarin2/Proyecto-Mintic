import React from 'react'
import { Container, Nav, Navbar ,DropdownButton,Dropdown} from 'react-bootstrap'
import './navbar.css';
export default class menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Navbar id ="navbar" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Trabajo MinTic< span id ="usuario-id-branm"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
                <Dropdown.Header>
                    
                </Dropdown.Header>
              <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
