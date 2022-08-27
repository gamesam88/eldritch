import styles from './Difficult.module.css'
import difficulties from '../../data/difficulties'
import DifficultyButton from './button/DifficultyButton'

const Difficult = (props) => {

    return (<div className={styles.container}>
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