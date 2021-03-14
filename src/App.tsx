import React from 'react';
import './App.sass'

type CardItemState = {
    id: number,
    order: number,
    text: string,
    color: string
}

function App() {
    const [cardList, setCardList] = React.useState<CardItemState[]>([
        {id: 1, order: 3, text: "Карточка 3", color: "green"},
        {id: 2, order: 1, text: "Карточка 1", color: "red"},
        {id: 3, order: 2, text: "Карточка 2", color: "yellow"},
        {id: 4, order: 4, text: "Карточка 4", color: "orange"},
    ])
    const [currentCard, setCurrentCard] = React.useState<CardItemState | null>(null)

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState): void {
        console.log('drag', card)
        setCurrentCard(card)
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState): void {
        // @ts-ignore
        e.target.style.background = card.color
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault()
        // @ts-ignore
        e.target.style.background = "lightgray"
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState): void {
        e.preventDefault()
        // @ts-ignore
        e.target.style.background = card.color
        setCardList(cardList.map((c: any) => {
            if (c.id === card.id) {
                // @ts-ignore
                return {...c, order: currentCard.order}
            }
            // @ts-ignore
            if (c.id === currentCard.id) {
                return {...c, order: card.order}
            }
            return c
        }))
        console.log('drag', card)
    }

    const sortCards = (a: CardItemState, b: CardItemState): number => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div className="App">
            {cardList.sort(sortCards).map(card => (
                <div
                    key={card.id}
                    onDragStart={e => dragStartHandler(e, card)}
                    onDragLeave={e => dragEndHandler(e, card)}
                    onDragEnd={e => dragEndHandler(e, card)}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropHandler(e, card)}
                    className={"card " + card.color}
                    draggable={true}
                >
                    {card.text}
                </div>
            ))}
        </div>
    );
}

export default App;
