import React, { Component } from 'react';
import './Dashboard.scss';
import Post from './Post/Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions';

class Dashboard extends Component {

    state = {
        subreddits: [
            'Alternativeart',
            'Pics',
            'Gifs',
            'Adviceanimals',
            'Cats',
            'Images',
            'Photoshopbattles',
            'Hmmm',
            'All',
            'Aww'
        ]
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
                <li className="nav-item">
                    <a className="nav-link Cursor" onClick={() => this.props.putPostDataToStore(subreddit.toLowerCase())}>{subreddit}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="Dashboard">
                {<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">SubReddits</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                this.createHeader()
                            } 
                        </ul>
                    </div>
                </nav>
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
