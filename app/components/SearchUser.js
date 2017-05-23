import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then((response) => {
      this.props.updateUser(response.data);
    });

    GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
      this.props.updateRepos(response.data);
    });
  }

  render() {
    return (
      <div className="jumbotron">

        <form action="#" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield fmdl-textfield mdl-js-textfield">
                <input
                    type="text"
                    ref="username"
                    className="mdl-textfield__input"
                    placeholder="Ex: andreluizlopes"
                />
            </div>
            <button
                type="submit"
                className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Buscar
            </button>
        </form>
      </div>
    );
  }
}

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;