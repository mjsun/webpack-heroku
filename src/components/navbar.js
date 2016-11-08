import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from  'react-bootstrap'
import {Link} from 'react-router';

const navBarRight = {
    'margin-right':'0px'
};
class NavBar extends Component {

    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">QuestionStack</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/questions">Questions</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to="/question/create">Ask</Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight style={navBarRight}>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;