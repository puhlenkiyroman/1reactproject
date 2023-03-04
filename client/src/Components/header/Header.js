import React from 'react'
import styles from './Header.module.scss'

const Header = function () {
    return (
        <header>
            <div className={styles.Header}>
                <img src="img\pikabu.png" width="117" height="26" alt="logo"/>
                <div className={styles.Header__wrapper}>
                    <div className={styles.Header__item}>
                        <span className="material-icons">
                            home
                        </span>
                    </div>
                    <div className={styles.Header__item}>
                        <span className="material-icons">
                            search
                        </span>
                    </div>
                    <div className={styles.Header__item}>
                        <span className="material-icons">
                            account_circle
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;