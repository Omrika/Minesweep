import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { cardSelector } from './store/selectors'
import Board from './Board'

class Game extends Component {
  render() {
    return(
      <div>
        <Board cards={this.props.cards}/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  cards: cardSelector,
})

export default connect(mapStateToProps)(Game);  
