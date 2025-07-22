import styles from './style.module.css'

const editProfile = async () => {

    try {
        const res = await axios.post(`http://localhost:8000/api/updateUser/${id}`, {
            username: username,
            email: email
        });

        if (res.status === 200) {
            navigate("/Profile");
        }
    } catch {
        setError('Failed to update user data!');
    }
    return (
        <div className={styles.edit}>
            <div>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={editProfile}>
                    <div className={styles.labels}>
                        <label>Username</label>
                    </div>
                    <Input type="text"
                        name='username'
                        hint='e.g. Joe Doe'
                        onChangeListener={(e) => { setUsername(e.target.value) }} />

                    <div className={styles.labels}>
                        <label>Email</label>
                    </div>
                    <Input type="text"
                        name='email'
                        hint='e.g. JoeDoe@gmail.com'
                        onChangeListener={(e) => { setEmail(e.target.value) }} />

                    <Button
                        title="Login"
                        className={`${styles.btn} main-color text-color`}
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
}
