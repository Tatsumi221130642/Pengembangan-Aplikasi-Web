import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login-style.css';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.prevenDefault();
        //contoh validasi login
        if(username === "admin" && password === "admin"){
            alert("Login Berhasil");

            //Rediredct ke halaman dashboard atau halaman berikutnya
            navigate("/dashboard");
        } else{
            alert("Login Gagal")
        }
    };
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPasswword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login;