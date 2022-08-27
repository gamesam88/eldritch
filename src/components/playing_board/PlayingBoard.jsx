import styles from './PlayingBoard.module.css'
import Counter from './counter/Counter';
import Deck from './deck/Deck';
import { useEffect, useState } from 'react';

const PlayingBoard = (props) => {
    const [tempStack, setTempStack] = useState();

    useEffect(() => {
        setTempStack(props.stack)
    }, [props.stack]);

    const stagesHandler = (id) => {
        let newStack = JSON.stringify(tempStack)
        let parseStack = JSON.parse(newStack)
        console.log(id)
        for (let arr in parseStack) {
            for (let i = 0; i < parseStack[arr].length; i++) {
                if (parseStack[arr][i]) {
                    if (parseStack[arr][i].id === id) {
                        delete parseStack[arr][i]
                    }
                }

            }
        }
        setTempStack(parseStack)
        console.log(parseStack)
    }


    return (<div className={styles.container} >
        <Counter stack={tempStack} />
        <Deck stagesHandler={stagesHandler} tempStack={tempStack} stack={props.stack} />
    </div>);
}

export default PlayingBoard;