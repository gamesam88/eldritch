import styles from "./Deck.module.css";
import skin from '../../../assets/mythicCardBackground.png'
import { useEffect, useState } from "react";

const Deck = (props) => {

    const [deck, setDeck] = useState();
    const [card, setCard] = useState();

    useEffect(() => {
        setDeck(props.stack)
        setCard()
    }, [props.stack, props.god]);

    const handler = () => {
        if (deck.length) {
            let x = deck.pop()
            setCard(x.cardFace)
            console.log(x)
        }
    }

    return (
        <div className={styles.container}>
            <img src={skin} alt="img" onClick={() => handler()} className={deck && deck.length ? styles.deck : styles.deckFull} />
            <>{card
                ? <img src={card} alt="img" />
                : <div></div>}
            </>
        </div>
    );
}

export default Deck;