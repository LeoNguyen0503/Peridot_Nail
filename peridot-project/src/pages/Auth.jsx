

function Auth() {
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" required/>
                <label>Password: </label>
                <input type="password" name="password" required/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Auth;