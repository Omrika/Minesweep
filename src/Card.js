import React, { Component } from 'react'
import styled from 'styled-components'

const CardElement = styled.div`
  background-color: ${props => (props.isActive ? 'red' : 'black')};
  border-radius: 4px;
  font-size: 50px;
  height: 100px;
  width: 86px;
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`

const CardWrapper = styled.div`
  padding: 2px;
`

class Card extends Component {
  render() {
    const { card, onClick } = this.props;
    
    // if card is active show the cards number
    return (
      <CardWrapper>
        <CardElement onClick={() => onClick(card)}>
        {card.isActive ? <span>OPEN</span> : null}
        </CardElement>
      </CardWrapper>
    )
  }
}

export default Card
