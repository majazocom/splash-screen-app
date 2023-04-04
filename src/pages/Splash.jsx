import { useEffect, useState } from 'react';
import styles from './splash.module.css';
import { useNavigate } from 'react-router-dom';

function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        // efter 2 sekunder på splashsidan skall vi omdirigeras till produktsidan
        const timer = setTimeout(() => {
            navigate('/products')
        }, 20000);
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className={styles.splashScreenOverlay}>
            <h2>SPLASH</h2>
            <button onClick={() => navigate('/products')}>Go to site</button>
        </section>
    );
}

export default Splash;