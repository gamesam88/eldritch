import styles from './DifficultyButton.module.css'
import difficulties from '../../../data/difficulties';
import { useEffect, useState } from 'react';

const Difficult = (props) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.dif) {
            if (props.dif === props.dificult.id) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
    }, [props.dif]);

    return (
        <button className={active ? styles.active : styles.notActive} onClick={() => {
            props.difHendler(props.dificult.id)
        }
        }>
            {props.dificult.name}
        </button>
    );
}

export default Difficult;