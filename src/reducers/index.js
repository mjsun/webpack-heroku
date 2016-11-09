import { combineReducers } from 'redux'

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