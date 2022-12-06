import './styles.css';

export  default function Login() {
    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form">
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input className="dsc-form-control" type="text" placeholder="Email"/>
                                    <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input className="dsc-form-control" type="password" placeholder="Senha"/>
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