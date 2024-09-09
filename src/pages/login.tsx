import "./login.css"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { auth } from "../services/firebase";


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
            <div className="LoginBody">
            <div className="LoginForm">
                <div className="Loginlogocircular">
                    <p> LOGO </p>
                </div>

                <label className="InputLabel">E-mail</label>
                <input
                    className="LoginInput"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                    
                <label className="InputLabel" >Senha</label>
                <input
                    className="LoginInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="LoginErrado">E-mail ou Senha Incorretos</p>

                <a href="/" className="naoSouAdm"> Não sou Administrador </a>
                
                <button className="LoginButton" onClick={() => signInWithEmailAndPassword(email, password)}>
                Log In
                </button>
                </div>
    </div>
        
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return (
        <div>
            <p>Logado</p>
        </div>
        );
    }

    return (
        <div className="LoginBody">
            <div className="LoginForm">
                <div className="Loginlogocircular">
                    <p> LOGO </p>
                </div>

                <label className="InputLabel">E-mail</label>
                <input
                    className="LoginInput"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                    
                <label className="InputLabel" >Senha</label>
                <input
                    className="LoginInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <a href="/" className="naoSouAdm"> Não sou Administrador </a>
                
                <button className="LoginButton" onClick={() => signInWithEmailAndPassword(email, password)}>
                Log In
                </button>
                </div>
    </div>
        
    );
}