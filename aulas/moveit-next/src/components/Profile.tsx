import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';
export function Profile() {
    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/joellytton.png" alt="Joellytton Mendonça"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                    </p>
            </div>
        </div>
    );
}