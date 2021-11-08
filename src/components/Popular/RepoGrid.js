import {Component} from "react";
import {connect} from "react-redux";
import {getPopularRepos} from "../../redux/thunk/app.thunk";
import {PopularList, PopularItem, PopularRank, SpaceListItems, Avatar} from "./Popular.styles"

const mapStateToProps = (state) => {
        const {loading, selectedLanguage, repos} = state.appReducer;
        return { loading, selectedLanguage, repos };
}

class RepoGrid extends Component {
        
        componentDidMount() {
                this.fetchPopularReposHandler(this.props.selectedLanguage);
        }
        
        componentDidUpdate(prevProps) {
                if(this.props.selectedLanguage !== prevProps.selectedLanguage) {
                        this.fetchPopularReposHandler(this.props.selectedLanguage);     
                }
        }

        fetchPopularReposHandler = (selectedLanguage) => {
                this.props.dispatch(getPopularRepos(selectedLanguage));
        }
        
        render() {
                const {repos, loading} = this.props;
                
                if(loading) {
                        return <p style={{textAlign: 'center'}}>Loading ...</p>;
                }
                
                return (
                    <PopularList>
                            {repos &&
                                repos.map((repo, index) => {
                                    return (
                                        <PopularItem key={repo.id}>
                                                <PopularRank>#{index + 1}</PopularRank>
                                                <SpaceListItems>
                                                        <li>
                                                                <Avatar src={repo.owner.avatar_url} alt="Avatar" />
                                                        </li>
                                                        <li>
                                                                <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                                                        </li>
                                                        <li>@{repo.owner.login}</li>
                                                        <li>{repo.stargazers_count}</li>
                                                </SpaceListItems>
                                        </PopularItem>
                                    )
                            })
                            }
                    </PopularList>
                )
        }
}

export default connect(mapStateToProps)(RepoGrid);
