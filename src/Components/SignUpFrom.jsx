import { useState } from "react"

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, sstError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try { 
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup")
            const result = await response.json()
            console.log(result)
        } catch (error) {
            setError(error.message);
        }
    }
    
    return(
       

        <div>
            <h2>Sign up!</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm