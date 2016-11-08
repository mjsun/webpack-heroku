import React, {Component} from 'react';
import { ButtonToolbar, Button, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
class Home extends Component {
    render(){
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>
                        <Link to="/question/create">
                            <Button  bsStyle="primary" >Ask a question!</Button>
                        </Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;