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

    return (
        <div className="App">
          {cardList.map(card => (
              <div className={"card"}>
                {card.text}
              </div>
          ))}
        </div>
    );
}

export default App;
