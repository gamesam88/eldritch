import styles from "./Creature.module.css";

const Creature = (props) => {

    return (
        <div className={styles.card} onClick={() => {
            props.godHandler(props.id)
        }}>
            <img src={props.ancientFace} alt="ancient" />
            <span>{props.id}</span>
        </div>
    );
}

export default Creature;