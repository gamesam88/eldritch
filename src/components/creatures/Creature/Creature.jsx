import styles from "./Creature.module.css";
import { useState, useEffect } from "react";

const Creature = (props) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.god) {
            if (props.id == props.god.id) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
    }, [props.god]);

    return (
        <div className={styles.card} onClick={() => {
            props.godHandler(props.id)
        }} >
            <img src={props.ancientFace} alt="ancient" className={active ? styles.active : styles.notActive} />
        </div>
    );
}

export default Creature;