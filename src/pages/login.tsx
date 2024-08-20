import "./login.css"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebase";
import { useState } from "react";

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
        <div>
            <p>Error: {error.message}</p>
        </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
        <div>
            <p>Signed In User: {user.email}</p>
        </div>
        );
    }
    return (
        <div className="Form">
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button onClick={() => signInWithEmailAndPassword(email, password)}>
            Sign In
        </button>
        </div>
    );
}