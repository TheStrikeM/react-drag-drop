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
    const [currentCard, setCurrentCard] = React.useState<CardItemState | null>(null)

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState): void {
        console.log('drag', card)
        setCurrentCard(card)
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
        // @ts-ignore
        e.target.style.background = "#ff6b6b"
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault()
        // @ts-ignore
        e.target.style.background = "lightgray"
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, card: CardItemState): void {
        e.preventDefault()
        // @ts-ignore
        e.target.style.background = "#ff6b6b"
        setCardList(cardList.map((c: any) => {
            if (c.id === card.id) {
                // @ts-ignore
                return {...c, order: currentCard.order}
            }
            if (c.id === currentCard) {
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
