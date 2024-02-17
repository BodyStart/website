import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
    const navigate = useNavigate();

    function handleClick(event, path) {
        event.preventDefault();
        navigate(path);
    }

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const nav23 = document.querySelector('.nav23');
        const closeBtn = document.querySelector('.close-btn');
        const links = document.querySelectorAll('.liststyle1 a');

        hamburger.addEventListener('click', () => {
            nav23.classList.add('nav23-active');
        });

        closeBtn.addEventListener('click', () => {
            nav23.classList.remove('nav23-active');
        });

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                nav23.classList.remove('nav23-active');
            });
        });
    }, []); // Empty dependency array ensures this effect runs only once after the initial render


    return (
        <>
            <header class="header">
                <div class="header-left">
                    <img
                        src="src/assets/images/logo-bodystart.png"
                        alt="logo-bodystart"
                        class="logo-bs"
                    />
                </div>

                <div class="header-center">
                    <div class="logo-text">
                        <a onClick={(event) => handleClick(event, '/')}>Bodystart</a>
                    </div>
                    <nav class="nav">
                        <ul>
                            <li><a onClick={(event) => handleClick(event, '/')} class="active">Accueil</a></li>
                            <li><a onClick={(event) => handleClick(event, '/adam-charles-bio')}>Qui suis-je ?</a></li>
                            <li><a onClick={(event) => handleClick(event, '/programme')}>Programmes</a></li>
                            <li><a onClick={(event) => handleClick(event, '/abonnement')}>Abonnement</a></li>
                            {/* <li><a href="5.transformations.html">Transformations</a></li>
                            <li><a href="6.vossuggestions.html">Vos suggestions</a></li>
                            <li><a href="7.membres.html">Membres (coach)</a></li> */
                            }
                        </ul>
                    </nav>
                </div>

                <div class="header-right">
                    <button class="hamburger" aria-label="Open navigation menu">☰</button>
                    <nav class="nav23">
                        <div class="close-btn">✖</div>
                        <ul>
                            <li class="liststyle1"><a onClick={(event) => handleClick(event, '/')} class="active">Accueil</a></li>
                            <li class="liststyle1"> <a onClick={(event) => handleClick(event, '/adam-charles-bio')}>Qui suis-je ?</a></li>
                            <li class="liststyle1"> <a onClick={(event) => handleClick(event, '/programme')}>Programmes</a></li>
                            <li class="liststyle1"> <a onClick={(event) => handleClick(event, '/abonnement')}>Abonnement</a></li>
                        </ul>
                    </nav>
                </div>

                {/* <div class="header-right" id="headerRight">
                <button
                id="boutonConnexion"
                class="connexion-btn"
                onclick="toggleBurgerMenu()"
                >
                Connexion
                </button>
            </div>  */
                }

                <div id="maburger" class="menu-burger">
                    <div class="burger-bouton">
                        <a href="/Profil/8.1.profil.programme.html" class="bouton-profil"
                        ><button>Profil</button></a
                        >
                        <a href="/Profil/8.1.profil.programme.html" class="bouton-profil"><button>Mes programmes</button></a>
                        <a href="/Profil/8.2.profil.abonnement.html" class="bouton-profil"><button>Gérer l'abonnement</button></a>
                        <a href="/Profil/8.3.profil.paiement.html" class="bouton-profil"><button>Historique de paiement</button></a>

                        <button>Mes suggestions</button>
                        <button>Mon coach</button>
                        <button>FAQ</button>
                        <button>Paramètres du compte</button>
                        <button id="deconnexion">Déconnexion</button>
                        <button class="fermer" id="fermer-burger">&times;</button>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;