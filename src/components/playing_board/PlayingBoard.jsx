import styles from './PlayingBoard.module.css'
import Counter from './counter/Counter';
import Deck from './deck/Deck';

const PlayingBoard = (props) => {

    return (<div className={styles.container} >
        <Counter stack={props.stack} />
        <Deck stack={props.stack} god={props.god} />
    </div>);
}

export default PlayingBoard;