import { useEffect, useState } from 'react';
import styles from './Counter.module.css'
import Stage from './stage/Stage';

const Counter = (props) => {

    let init = [{}, {}, {}]

    const [first, setFirst] = useState(init);
    const [second, setSecond] = useState(init);
    const [third, setThird] = useState(init);



    useEffect(() => {
        if (props.stack) {
            console.log(props.stack)
            setFirst(props.stack.first)
            setSecond(props.stack.second)
            setThird(props.stack.third)
        }
    }, [props.stack]);


    return (
        <div className={styles.container}>
            <Stage god={props.god} stage={first} />
            <Stage god={props.god} stage={second} />
            <Stage god={props.god} stage={third} />
        </div>
    );
}

export default Counter;