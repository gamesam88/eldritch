import { useEffect, useState } from 'react';
import styles from './Stage.module.css'

const Stage = (props) => {
    const [green, setGreen] = useState(0);
    const [brown, setBrown] = useState(0);
    const [blue, setBlue] = useState(0);

    useEffect(() => {
        if (props.stage) {
            let s1 = 0
            let s2 = 0
            let s3 = 0
            props.stage.forEach(element => {
                if (element) {
                    if (element.color === 'green') {
                        s1 += 1
                    } else
                        if (element.color === 'brown') {
                            s2 += 1
                        } else
                            if (element.color === 'blue') {
                                s3 += 1
                            }
                }
            });
            setGreen(s1)
            setBrown(s2)
            setBlue(s3)
        }

    }, [props.stage]);

    return (
        <div className={styles.container}>
            <div className={styles.circle}>{green}</div>
            <div className={styles.circle}>{brown}</div>
            <div className={styles.circle}>{blue}</div>
        </div>
    );
}

export default Stage;