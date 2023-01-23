import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    counter:0,
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
  timeoutUpdate = null;
  //geralmente usado pra fazer a requisição pra uma API
  componentDidMount(){
    this.handleTimeout()
  }

  componentDidUpdate(){
    this.handleTimeout();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () =>{
    const {posts, counter} = this.state
    posts[0].title = 'testando aula'
        setTimeout(() => {
          this.setState({posts, counter: counter + 1 })
        },5000)
  }
  render(){
    const {posts, counter} = this.state;
    return(
      <div className='App'>
          <h1>{counter}</h1>
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
