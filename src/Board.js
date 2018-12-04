import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Board = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UPDATE_CARD = 'UPDATE_CARD'

class BoardWrapper extends Component {

  state = {
    cards: null
  }

  componentDidMount() {
    this.onAction(UPDATE_CARD, { cards: this.props.cards })
  } 

  // ComponentWillRecieveProps()
  // should be updating "cards" state so it will no longer be null. 
  // isn't running because props isn't changing. Why tho?

  onCardClick = card => {
    console.log(this.state.cards)
    console.log(card)
    const cards = this.state.cards.map(
      item => (item.id === card.id ? { ...item, isActive: !item.isActive } : item)
    )

    this.onAction(UPDATE_CARD, {cards: cards})
    // change isActive to true .. or false
    // check if it's a mine or mine-free
    // if it's a mine - game over
    // if it's mine-free cell remains open and player can click another cell
  }
  
  // isMineFree = () => {}
  // hasMine = () => {}

  onAction = (eventType, payload) => {
    switch (eventType) {
      case UPDATE_CARD: {
        this.setState({ cards: payload.cards })
        break
      }

      default:
        break
    }
  }

  render() {
    const { cards } = this.state;

    return(
      <section>
        <Board>
          {cards && cards.map(card => <Card key={card.id} card={card} onClick={this.onCardClick} />)}
        </Board>
      </section>
    )
  }
}

export default BoardWrapper
