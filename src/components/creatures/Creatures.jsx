import styles from './Creatures.module.css'
import Creature from "./Creature/Creature";
import ancients from '../../data/ancients.js';
import { useState } from 'react';

const Creatures = (props) => {
    const [name, setName] = useState('choose');

    const nameHandler = (name) => {
        setName(name)
    }

    return (
        <div className={styles.container} >
            <div className={styles.godName}>{name}</div>
            {ancients.map((elem) => {
                return (
                    <Creature ancientFace={elem.cardFace} key={elem.id} id={elem.id} godHandler={props.godHandler} nameHandler={nameHandler} />
                )
            }
            )}
        </div>
    );
}

export default Creatures;