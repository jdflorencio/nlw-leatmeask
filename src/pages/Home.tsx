import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>
                    Tire suas dúvidas em tempo-real
                </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letMeask" />
                    <button className="create-room">
                        <img src={googleImg} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        Ou entre uma sala
                    </div>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Entrar Na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}