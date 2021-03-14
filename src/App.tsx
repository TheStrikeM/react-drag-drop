import React from 'react';
import './App.sass'

type CardListState = {
  id: number,
  order: number,
  text: string
}

function App() {
    const [cardList, setCardList] = React.useState<CardListState[]>([
        {id: 1, order: 3, text: "Карточка 3"},
        {id: 2, order: 1, text: "Карточка 1"},
        {id: 3, order: 2, text: "Карточка 2"},
        {id: 4, order: 4, text: "Карточка 4"},
    ])

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {

    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {

    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: CardListState) {

    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, card: CardListState) {

    }

    return (
        <div className="App">
          {cardList.map(card => (
              <div
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
