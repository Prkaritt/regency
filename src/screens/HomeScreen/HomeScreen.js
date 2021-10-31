import React from 'react';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
    return (
        <div>
            <div className={styles.cover_section}>
                <div className={styles.hero_box}>
                    <h2>Regency Nepal Travels</h2>
                    <p className={`paragraph ${styles.paragraph}`}>Travel with no regrets</p>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
