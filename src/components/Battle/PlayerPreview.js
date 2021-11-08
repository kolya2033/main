import {Column, Avatar} from "../Battle/Battle.styles";

const PlayerPreview = (props) => {
    return (
        <div>
            <Column>
                <Avatar src={props.avatar} alt="avatar" />
                <h2>@{props.username}</h2>
            </Column>
            {props.children}
        </div>
    )
}



export default PlayerPreview;



