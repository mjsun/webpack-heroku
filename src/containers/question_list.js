import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
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


class QuestionList extends Component {
    render(){
        return (
            <div>
                <ListGroup>
                    {
                        QUESTIONLIST.map(function(question){
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

export default QuestionList;