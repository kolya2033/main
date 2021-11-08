import {Component} from "react";
import {Column, Header, InputHeader, BattonBattle} from "../Battle/Battle.styles";

class PlayerInput extends Component {
    state = {
        username: ''
    }

    handleUserNameField = (event) => {
        this.setState({username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username)
    }

    render() {
        return (
            <Column onSubmit={this.handleSubmit}>
                <Header htmlFor="username">{this.props.label}</Header>
                <InputHeader
                    type="text"
                    id='username'
                    placeholder='GitHub UserName'
                    value={this.state.username}
                    onChange={this.handleUserNameField}
                    autoComplete='off'
                />
                <BattonBattle type='submit' disabled={!this.state.username}>Submit</BattonBattle>
            </Column>
        )
    }
}


export default PlayerInput;
