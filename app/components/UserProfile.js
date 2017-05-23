import React from 'react';

import UserRepos from './UserRepos';

const UserProfile = ({ user, repos }) => {
  var userInfo = user ?
    (
    <div>
        <div className="snippet-group">
            <div className="snippet-header">
                <div className="snippet-demos">
                    <div className="snippet-demo-padding"></div>
                    <div className="snippet-demo">
                        <div className="snippet-demo-container demo-card demo-card__wide">
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <div className="mdl-card__title" style={{background: 'url('+user.avatar_url+') center / cover'}}>
                                    <h2 className="mdl-card__title-text">{user.name}</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <h2>{user.login}</h2>
                                    Followers: {user.followers} / Following: {user.following}
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a href={user.html_url} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                        View details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="snippet-demo-padding"></div>
                </div>
            </div>
        </div>
        <div className="col-lg-8">
          <UserRepos repos={repos} />
        </div>
      </div>
    ) : null;

    return userInfo;
}

UserProfile.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array,
};

export default UserProfile;