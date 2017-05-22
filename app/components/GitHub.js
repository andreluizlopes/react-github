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
                <h1>Github user</h1>
                <SearchUser 
                    updateUser={this.updateUser}
                    updateRepos={this.updateRepos}
                />
                <UserProfile 
                    user={this.state.user}
                    repos={this.state.repos}
                />
            </div>
        );
    }
}

export default GitHub;
