import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { connect } from 'react-redux';
import {getQuestions} from '../actions';

class QuestionList extends Component {
    render(){
        console.log(this.props, this.state);
        return (
            <div>
                <ListGroup>
                    {
                        map(function(question){
                            return <LinkContainer to={{pathname: 'questions/view/'+question.id}}>
                                    <ListGroupItem header={question.title}>
                                        <span>asked by {question.asker}, {question.answers.length} answers.</span>
                                    </ListGroupItem>
                                </LinkContainer>

                        })
                    }
                </ListGroup>
            </div>
        )
    }
}

export default connect(null, {getQuestions})(QuestionList);