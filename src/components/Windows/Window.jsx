import React from 'react';
import Styles from './Window.module.css';

const Window = ({children}) => {
    return (
        <div className={Styles.windowContainer}>
            {children}
        </div>
    )
}

export default Window
