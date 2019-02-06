import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo/Demo';
import Post from './Sidebar/Post/Post';
import axios from 'axios';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://www.reddit.com/r/cats.json')
    .then(response => {
        this.setState({
          posts: response.data.data.children
        });
        console.log(response.data.data.children);
    });
  }

  onClickHandler = (subreddit) => {
      console.log('onClickHandler');
      const url = 'https://www.reddit.com/r/'+subreddit+'.json';
      axios.get(url)
      .then( response => {
        this.setState({
          posts: response.data.data.children
        });
      })
  };

  onNameChangeHandler = (event) => {
    this.setState({
      demos: [
        {
          name: 'Angular7',
          type: 'JS'
        },
        {
          name: event.target.value,
          type: 'JS'
        }
      ]
    });
  };

  createPostsList() {
    console.log('createPostsList');
    return this.state.posts.map(post => {
      return (
        <Post key={post.id} data={post}></Post>
      );
    });
  }

  render() {
    return (
      <div className="App">
        { 
         /* <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </nav> */
          <div>
            <button onClick={() => this.onClickHandler('pics')}>Pics</button>
            <button onClick={() => this.onClickHandler('cats')}>Cats</button>
          </div>
        }
        {/* <h1>First React App!</h1>
        <Demo 
        demoName={this.state.demos[0].name} 
        demoType={this.state.demos[0].type}/>
        <Demo 
        demoName={this.state.demos[1].name} 
        demoType={this.state.demos[1].type}
        click={this.onClickHandler.bind(this, 'From paragraph Angular7')}
        change={this.onNameChangeHandler}>This is new!!!</Demo>
        <button onClick={() => this.onClickHandler('From button Angular')}>Button</button>
        */
        this.createPostsList()}
      </div>
    );
  }
}

export default App;
