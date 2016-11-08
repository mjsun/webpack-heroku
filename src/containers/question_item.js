import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

const QUESTIONLIST = [
    {
        title: 'How are you?',
        id: 1,
        votes: 3,
        asker: 'Tommy',
        answers: [
            {
                title: "answer1",
                content: "answer1"
            },
            {
                title: "answer2",
                content: "answer2"
            },
            {
                title: "answer3",
                content: "answer3"
            }
        ],
        views: [
            {
                name: 'peter'
            },
            {
                name: 'andy'
            }
        ]
    },
    {
        title: 'How old are you?',
        id: 2,
        votes: 3,
        asker: 'Donnie',
        answers: [
            {
                title: "answer1",
                content: "answer1"
            },
            {
                title: "answer2",
                content: "answer2"
            },
            {
                title: "answer3",
                content: "answer3"
            }
        ],
        views: [
            {
                name: 'petdfsder'
            },
            {
                name: 'ansadfsdy'
            }
        ]
    },
    {
        title: 'how tall are you?',
        id: 3,
        asker: 'Tony',
        votes: 3,
        answers: [
            {
                title: "answer1",
                content: "answer1"
            },
            {
                title: "answer2",
                content: "answer2"
            },
            {
                title: "answer3",
                content: "answer3"
            }
        ],
        views: [
            {
                name: 'pete2r'
            },
            {
                name: 'an32dy'
            }
        ]
    }
]

class QuestionItem extends Component {
    render(){
        var question = {};
        for(var i = 0; i < QUESTIONLIST.length; i++) {
            if(QUESTIONLIST[i].id == this.props.params.id) {
                question = QUESTIONLIST[i];
            }
        }
        return (
            <div>
                <LinkContainer to={{pathname: '/questions/edit/'+ question.id}}>
                    <Button bsStyle="info">Edit</Button>
                </LinkContainer>
                {question.title}
                <ListGroup>
                    {question.answers.map(function(answer){
                        return <ListGroupItem>
                            <h1>{answer.title}</h1>
                            <p>{answer.content}</p>
                        </ListGroupItem>
                    })}
                </ListGroup>
            </div>
        )
    }
}

export default QuestionItem;