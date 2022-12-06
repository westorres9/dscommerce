import './styles.css';
import {useState} from "react";
import {Credentials} from "../../../types/auth";
import { loginRequest } from "../../../services/auth-service";
import * as authService from '../../../services/auth-service';

export  default function Login() {

    const [formData, setFormData] = useState<Credentials>({
        username: '',
        password: ''
    });


    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value});
    }



    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input
                                    className="dsc-form-control"
                                    type="text"
                                    placeholder="Email"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                                    <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input
                                    className="dsc-form-control"
                                    type="password"
                                    placeholder="Senha"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}