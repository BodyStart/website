import { useEffect } from 'react';
import '../../public/assets/css/connexion.css'
import { useNavigate  } from 'react-router-dom';


function Connexion() {
    const navigate = useNavigate();

    function handleClick(event, path) {
        event.preventDefault();
        navigate(path);
        window.location.reload();
    }
    
    useEffect(() => {
        const footer = document.querySelector('footer');
        footer.classList.remove('footer-center');
        footer.classList.add('footer');
    }, []);

    // on load get the header element and not display it 
    useEffect(() => {
        const header = document.querySelector('header');
        header.style.display = 'none';
        return () => {
            header.style.display = 'block';
        }
    }, []);


    return (
        <main class="login">
            <h2 class="login-title">
                <span>Connectez-vous</span>
                <a onClick={(event) => handleClick(event, '/')}>
                    <span class="croix">&times;</span>
                </a>
            </h2>


            <div class="modal-content">

                <form class="signUpForm" id="signUpForm">
                    <input type="email" id="email" placeholder="E-mail" required />
                    <input type="password" id="password" placeholder="Mot de passe" required />
                    <input type="submit" id="submit" placeholder="Se connecter" />
                    <p>Pas encore membre ? <a href="0.1.inscription.html">S'inscrire</a></p>
                </form>

            </div>

        </main>
    );
}
export default Connexion;