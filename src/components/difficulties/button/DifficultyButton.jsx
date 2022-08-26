import styles from './DifficultyButton.module.css'

const Difficult = (props) => {

    return (
        <button onClick={() => {
            props.difHendler(props.dificult.id)
        }
        }>
            {props.dificult.name}
        </button>
    );
}

export default Difficult;