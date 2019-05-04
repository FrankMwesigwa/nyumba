import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddPost from './components/Posts/AddPost'
import PostsList from './components/Posts/PostsList'
import EditPost from './components/Posts/EditPost'
import PostsDetails from './components/Posts/PostsDetail'

class App extends Component {

  render (){
    return (
      <BrowserRouter>
      <div>
        <Route exact path='/' component={PostsList} />
        <Route path='/addPost' component={AddPost} />
        <Route path='/editPost/:id' component={EditPost} />
        <Route path='/postDetails/:id' component={PostsDetails} />
      </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
