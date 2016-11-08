import React, {Component} from 'react';
var ReactQuill = require('react-quill');


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
            <div>
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