import React from 'react';
import styles from './HomeScreen.module.css';
import cover from "./../../assets/images/cover.jpg"
import srilanka from "./../../assets/images/srilanka.jpg"
import dubai from "./../../assets/images/dubai.jpg"
import thailand from "./../../assets/images/thailand.jpg"
import singapore from "./../../assets/images/singapore.jpg"

const HomeScreen = () => {
    return (
        <div>
            <div className={styles.cover_section}>
                <div className={styles.hero_box}>
                    <h1>Regency Nepal Travels</h1>
                    <p className={`paragraph ${styles.paragraph}`}>Travel with no regrets</p>
                </div>
            </div>
            <div className={styles.section_tours}>
                <h2>Our Tours</h2>
                <ul className={styles.section_tours_list}>
                    <li className={styles.section_tours_tour}>
                        <img src={srilanka} />
                        <h3>Sri Lanka</h3>
                    </li>
                    <li className={styles.section_tours_tour}>
                        <img src={dubai} />
                        <h3>Dubai</h3>
                    </li>
                    <li className={styles.section_tours_tour}>
                        <img src={thailand} />
                        <h3>Thailand</h3>
                    </li>
                    <li className={styles.section_tours_tour}>
                        <img src={singapore} />
                        <h3>Singapore</h3>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HomeScreen
