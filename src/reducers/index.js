import { combineReducers } from 'redux'

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

const questionList = (state = QUESTIONLIST, action) => {
    switch (action.type) {
        case 'CREATE_QUESTION':
            return [...state, action.payload]
        default:
            return state

    }
}

const QuestionApp = combineReducers({
    questionList
})

export default QuestionApp;