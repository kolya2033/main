import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../../redux/actions/app.actions";
import {List, Item} from "./Popular.styles";

const SelectLanguage = () => {
    const dispatch = useDispatch();
    const { selectedLanguage, loading } = useSelector(state => state.appReducer);
    
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    
    const selectedLanguageHandler = (language) => {
        if(!loading) {
            dispatch(changeLanguage(language));   
        }
    }

    return (
        <List>
            {languages.map((language, index) =>
                <Item
                    key={index}
                    isSelectedLanguage={language === selectedLanguage}
                    onClick={() => selectedLanguageHandler(language)}>
                    {language}
                </Item>)}
        </List>
    )
}

export default SelectLanguage;
