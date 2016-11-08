import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';


import App from './components/app';
import Home from './components/home';
import QuestionCreate from './containers/question_create';
import QuestionList from './containers/question_list';
import QuestionItem from './containers/question_item';
import QuestionEdit from './containers/question_edit';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path="question/create" component={QuestionCreate} />
        <Route path="questions" component={QuestionList} />
        <Route path="questions/view/:id" component={QuestionItem} />
        <Route path="questions/edit/:id" component={QuestionEdit} />
    </Route>
)