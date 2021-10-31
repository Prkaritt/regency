import React from 'react';
import styles from './HomeScreen.module.css';
import cover from "./../../assets/images/cover.jpg"
import srilanka from "./../../assets/images/srilanka.jpg"
import dubai from "./../../assets/images/dubai.jpg"
import thailand from "./../../assets/images/thailand.jpg"
import singapore from "./../../assets/images/singapore.jpg"
import japan from "./../../assets/images/japan.jpg"
import europe from "./../../assets/images/europe.jpg"
import maldives from "./../../assets/images/maldives.jpg"

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
                <h2>Where will you make memories in 2021</h2>
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
            <div className={styles.section_bestSellers}>
                <h2>Best Sellers</h2>
                <ul className={styles.bestSellers_list}>
                    <li>
                        <div className={styles.bestSeller_image}>
                        <img src={europe} alt="europe Image"/>
                        </div>
                        <h3>Europe</h3>
                        <h3>11 days</h3>
                    </li>
                    <li>
                        <div className={styles.bestSeller_image}>
                        <img src={singapore} alt="singapore Image"/>
                        </div>
                        <h3>S.E Asia</h3>
                        <h3>7 days</h3>
                    </li>
                    <li>
                        <div className={styles.bestSeller_image}>
                        <img src={japan} alt="japan Image"/>
                        </div>
                        <h3>Japan</h3>
                        <h3>8 days</h3>
                    </li>
                    <li>
                        <div className={styles.bestSeller_image}>
                        <img src={maldives} alt="maldives Image"/>
                        </div>
                        <h3>South Asia</h3>
                        <h3>6 days</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeScreen
