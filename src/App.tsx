import React from 'react';
import './App.sass'

type CardItemState = {
  id: number,
  order: number,
  text: string
}

function App() {
    const [cardList, setCardList] = React.useState<CardItemState[]>([
        {id: 1, order: 3, text: "Карточка 3"},
        {id: 2, order: 1, text: "Карточка 1"},
        {id: 3, order: 2, text: "Карточка 2"},
        {id: 4, order: 4, text: "Карточка 4"},
    ])
    const [currentCard, setCurrentCard] = React.useState<CardItemState>()

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState) {
        console.log('drag', card)
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {

    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState) {
        e.preventDefault()
        console.log('drag', card)
    }

    return (
        <div className="App">
          {cardList.map(card => (
              <div
                  key={card.id}
                  onDragStart={e => dragStartHandler(e, card)}
                  onDragLeave={e => dragEndHandler(e)}
                  onDragEnd={e => dragEndHandler(e)}
                  onDragOver={e => dragOverHandler(e)}
                  onDrop={e => dropHandler(e, card)}
                  className={"card"}
                  draggable={true}
              >
                {card.text}
              </div>
          ))}
        </div>
    );
}

export default App;
