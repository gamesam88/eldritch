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
            setFirst(props.stack.first)
            setSecond(props.stack.second)
            setThird(props.stack.third)
        }
    }, [props.stack]);


    return (
        <div className={styles.container}>
            <p>Первая стадия</p>
            <Stage stage={first} stack={props.stack} />
            <p>Вторая стадия</p>
            <Stage stage={second} stack={props.stack} />
            <p>Третья стадия</p>
            <Stage stage={third} stack={props.stack} />
        </div>
    );
}

export default Counter;