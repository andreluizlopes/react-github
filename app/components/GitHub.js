import React from 'react';
import SearchUser from './SearchUser';
import UserProfile from './UserProfile';

class GitHub extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            repos: [],
        };
        this.updateUser = this.updateUser.bind(this);
        this.updateRepos = this.updateRepos.bind(this);
    }

    updateUser(user) {
        this.setState({user});
    }

    updateRepos(repos) {
        this.setState({repos});
    }

    render() {
        return (
            <div>
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            <span className="mdl-layout-title"><h3>GitHub Info</h3></span>
                            <div className="mdl-layout-spacer"></div>
                            <SearchUser 
                                updateUser={this.updateUser}
                                updateRepos={this.updateRepos}
                            />
                        </div>
                    </header>
                </div>
                <UserProfile 
                    user={this.state.user}
                    repos={this.state.repos}
                />
            </div>
        );
    }
}

export default GitHub;
