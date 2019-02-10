import React, { Component } from 'react';
import './Dashboard.scss';
import Post from './Post/Post';
import { connect } from 'react-redux';
import { fetchPosts, ERROR } from '../store/actions';
import Loader from 'react-loader-spinner';
import Error from '../Common/Error/Error';

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
        if (!this.props.posts) {
            return;
        }
        return this.props.posts.map((post, index) => {
            if (!(post.data.url && post.data.url.endsWith('.jpg'))) {
                return;
            }
            return (
                <div key={index} className="Card-Position">
                    <Post key={post.id} data={post}></Post>
                </div>
            );
        });
    }

    createHeader() {
        return this.state.subreddits.map((subreddit, index) => {
            return (
                <li key={index} className="nav-item">
                    <a className="nav-link Cursor" onClick={() => this.props.putPostDataToStore(subreddit.toLowerCase())}>{subreddit}</a>
                </li>
            );
        });
    }

    render() {
        let postsData;
        if (this.props.status === 'RESOLVING') {
            postsData = <div className="Spinner">
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            </div>
        } else if (this.props.status === 'ERROR') {
            postsData = <div className="Error-Position mt-4">
                <Error/>
            </div>
        } else {
            postsData = this.createPostsList();
        }
        return (
            <div>
                {
                    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
                    <div className="container-fluid">
                        {
                            postsData
                        }
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts,
        status: state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        putPostDataToStore: (subreddit) => dispatch(fetchPosts(subreddit))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
