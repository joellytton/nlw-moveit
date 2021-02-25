import styles from '../styles/components/Profile.module.css';
export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/joellytton.png" alt="Joellytton Mendonça"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                    </p>
            </div>
        </div>
    );
}