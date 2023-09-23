import Google from "../imgs/google.png";
import Github from "../imgs/github.png";
import Facebook from "../imgs/facebook.png";
import "./Login.css";
export default function Login(){

    const google = () => {
        window.open("http://localhost:2000/auth/google", "_self")
    }

    return (
        <div className="log">
            <h1 className="login-title">Choose a login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src = {Google} alt = "google" className="icon"/>
                        Google
                    </div>
                    <div className="loginButton github">
                        <img src = {Github} alt = "github" className="icon"/>
                        Github
                    </div>
                    <div className="loginButton facebook">
                        <img src = {Facebook} alt = "facebook" className="icon"/>
                        Facebook
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}