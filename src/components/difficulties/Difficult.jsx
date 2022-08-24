import styles from './Difficult.module.css'

const Difficult = (props) => {

    return (<div className={styles.container}>
        <div className={styles.diff}>{props.dif}</div>
        <button onClick={() => props.difHendler('easy')}>Easy</button>
        <button onClick={() => props.difHendler('normal')}>Normal</button>
        <button onClick={() => props.difHendler('hard')}>Hard</button>
    </div>);
}

export default Difficult;