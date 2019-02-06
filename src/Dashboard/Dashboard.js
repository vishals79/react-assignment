import React, { Component } from 'react';
import './Dashboard.css';
import Post from './Post/Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions';

class Dashboard extends Component {

  state = {
    subreddits: ['pics', 'cats']
  }

  componentDidMount() {
    this.props.putPostDataToStore('pics');
  }


  createPostsList() {
    return this.props.posts.map(post => {
      return (
        <Post key={post.id} data={post}></Post>
      );
    });
  }

  createHeader() {
    return this.state.subreddits.map(subreddit => {
        return (
            <button onClick={() => this.props.putPostDataToStore(subreddit)}>{subreddit}</button>
        );
    });
  }

  render() {
    return (
      <div className="Dashboard">
        { 
          this.createHeader()
        }
        {
          this.createPostsList()
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    putPostDataToStore: (subreddit) => dispatch(fetchPosts(subreddit))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
