import React, {Component} from 'react';
var ReactQuill = require('react-quill');
import {PageHeader} from 'react-bootstrap';

class QuestionCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {text: ''};
    }
    onTextChange (value) {
        this.setState({ text:value });
    }

    render(){
        return (
            <div class="container">
                <PageHeader>Go ahead post a question</PageHeader>

                <ReactQuill
                    theme="snow"
                    value={this.state.text}
                    onChange={this.onTextChange.bind(this)}
                    />
                {this.state.text}
            </div>
        )
    }
}

export default QuestionCreate;