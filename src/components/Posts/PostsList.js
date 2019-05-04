import React , { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class PostsList extends Component {
    
    state = {
        books: []
    }
    
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            this.setState({ books: res.data });
            console.log(this.state.books);
          });
    }

      render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  BOOK CATALOG
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/addPost"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.books.map(book =>
                      <tr>
                        <td><Link to={`/postDetails/${book.id}`}>{book.id}</Link></td>
                        <td>{book.title}</td>
                        <td>{book.userId}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default PostsList;