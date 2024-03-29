
import React from 'react';
import './App.css';
import Board from './components/Board'
import data from './sampleData'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound'
import { boardsRef, } from './firebase'



class App extends React.Component {
  state = {
    boards: []
  }
  componentDidMount() {
    this.setState({boards: data.boards})
  }

  createNewBoard = board => {
    const newBoard = boardsRef
    this.setState({ boards: [...this.state.boards, board] })
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Home
                  boards={this.state.boards}
                  createNewBoard={this.createNewBoard} />
          } ></Route>
            <Route path="/board" element={<Board />} ></Route>
            <Route element={PageNotFound} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
