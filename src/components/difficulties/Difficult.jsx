import styles from './Difficult.module.css'
import difficulties from '../../data/difficulties'
import DifficultyButton from './button/DifficultyButton'
import { useEffect, useState } from 'react'

const Difficult = (props) => {
    const [name, setName] = useState('select');

    useEffect(() => {
        if (props.god) {
            setName(props.god.name)
        }
    }, [props.god]);

    return (<div className={styles.container}>
        <div className={styles.godName}><b>Древний:</b> {name}</div>
        <div className={styles.diff}><b>Сложность:</b> {props.dif}</div>
        <>{difficulties.map((element) => {
            return (
                <DifficultyButton key={element.id} difHendler={props.difHendler} dificult={element} />
            )
        })}
        </>
    </div>);
}

export default Difficult;