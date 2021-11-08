import {Component} from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import {Reset, Btn, Row} from "../Battle/Battle.styles";

class Battle extends Component {
    state = {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    }


    submitHandler = (id, username) => {
        this.setState({
            [id + 'Name']: username,
            [id + 'Image']: 'https://github.com/' + username + '.png?size=200',
        })
    }

    handleReset = (id) => {
        this.setState({
            [id + 'Name']: '',
            [id + 'Image']: null,
        })
    }

    render() {
        const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;
        return (
            <div>
                <Row>
                    {!playerOneName ?
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.submitHandler}
                        /> :
                        <PlayerPreview 
                            avatar={playerOneImage}
                            username={playerOneName}
                        >
                            <Reset onClick={() => this.handleReset('playerOne')}>Reset</Reset>
                        </PlayerPreview>
                    }
                    {!playerTwoName ?
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.submitHandler}
                        /> :
                        <PlayerPreview
                            avatar={playerTwoImage}
                            username={playerTwoName}
                        >
                            <Reset onClick={() => this.handleReset('playerTwo')}>Reset</Reset>
                        </PlayerPreview>
                    }
                </Row>
                {playerOneImage && playerTwoImage &&
                    <Btn to='/battle/results'>Battle</Btn>
                }
            </div>
        )
    }

    


}





export default Battle;
