import styles from './Creatures.module.css'
import Creature from "./Creature/Creature";
import ancients from '../../data/ancients.js';

const Creatures = (props) => {
    return (
        <div className={styles.container} >
            {ancients.map((elem) => {
                return (
                    <Creature ancientFace={elem.cardFace} key={elem.id} id={elem.id} godHandler={props.godHandler} />
                )
            }
            )}
        </div>
    );
}

export default Creatures;