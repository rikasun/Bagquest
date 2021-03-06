import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class BoardIndex extends React.Component{
  constructor(props) {
    super(props);
    this.renderPins = this.renderPins.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserBoards(this.props.match.params.id);
  }

  renderPins(board) {
    let {pins} = this.props
    if (board.pins) 
    return (
      <div className="board-preview">
        {board.pins.slice(0, 6).map(pinId => <img src={pins.find(pin => pin.id === pinId).photoUrl}/>)}
      </div>
    )
  }

  render(){
      return (
        <div className="board-display">
          <div className="create-board-box" onClick={() => this.props.openModal("createBoard")}>
            <div className="plus-sign-box"><i className="fas fa-plus-circle plus-sign"></i></div>
            <div className="create-board-text">Create board</div>
          </div>
          {this.props.boards.map(board => {
            return (
              <div>
                <Link className="board-name-link" to={`/boards/${board.id}`}>
                  <div
                    className="single-board">
                    {this.renderPins(board)}
                  </div>          
                <div className="board-name">{board.boardName}</div>
                </Link>
              </div>
            )
          }
          )}
        </div>
      );
  }
}

export default withRouter(BoardIndex);
