import React, {Component} from 'react';

class MoreReleases extends Component {
  render () {
    return (
      <div className = "more-releases">
        <a href = {'https://www.imdb.com/calendar/?region=gb'}>
          <button> Upcoming releases</button>
        </a>
      </div>
    );
  }
}

export default MoreReleases;
