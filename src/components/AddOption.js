import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }

    //keep this method and call parent method
    handleAddOption = (e) => {
        e.preventDefault();
        // console.log('testing');

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option); // calling parent method

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                { this.state.error && <p className="add-option-error">{this.state.error}</p> }
                <form className="add-option" onSubmit={this.handleAddOption} autocomplete="off">
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}