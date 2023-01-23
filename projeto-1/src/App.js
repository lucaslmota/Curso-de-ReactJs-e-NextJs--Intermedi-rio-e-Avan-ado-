import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    posts:[
      {
        id: 1,
        title: 'Capitulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Capitulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Capitulo 3',
        body: 'O Corpo 3'
      }
    ]
  }

  render(){
    const {posts} = this.state;
    return(
      <div className='App'>
          {
            posts.map(post => (
              <div key={post.id}>
                <h1 key={post.id}>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))
          }
      </div>
    )
  }

}

export default App;
