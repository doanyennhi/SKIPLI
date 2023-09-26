import styles from './StartPage.module.css';
import {useState} from "react";

const StartPage = () => {
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')

    function handleValidation() {

    }

    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h1>Welcome to Skipli Project</h1>
            </header>

            <form className={styles.form}>
                <div>
                    <label className={styles.label}>
                        Phone Number: <input type="tel" name="phone" placeholder="Enter phone number..." value={phone}
                                             onChange={e => setPhone(e.target.value)}
                                             pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    </label>
                    <button className={styles.btn}>Submit</button>
                </div>
                <br/>

                <div>
                    <label className={styles.label}>
                        Access code: <input name="code" placeholder="Enter access code" value={code}
                                            onChange={e => setCode(e.target.value)}
                                            pattern="[0-9]{6}" />
                    </label>
                    <button className={styles.btn} onClick={handleValidation}>Validate</button>
                </div>
            </form>
        </div>
    );
}

export default StartPage