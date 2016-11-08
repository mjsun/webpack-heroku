import React, {Component} from 'react';
var ReactQuill = require('react-quill');


class QuestionEdit extends Component {
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
                {this.props.params.id}
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

export default QuestionEdit;