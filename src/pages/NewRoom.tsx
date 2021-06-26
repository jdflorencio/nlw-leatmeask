import { Link } from 'react-router-dom'
import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom() {
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
                    <h2>Criar uma nova Sala</h2>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o nome da sala" />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}