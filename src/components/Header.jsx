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

        links.forEach(function (link) {
            link.addEventListener('click', function (e) {
                nav23.classList.remove('nav23-active');
            });
        });
    }, []); // Empty dependency array ensures this effect runs only once after the initial render


    return (
        <>
            <header className="header">
                <div className="header-left">
                    <img
                        src="/assets/images/logo-bodystart.png"
                        alt="logo-bodystart"
                        className="logo-bs"
                    />
                </div>

                <div className="header-center">
                    <div className="logo-text">
                        <a onClick={(event) => handleClick(event, '/')}>Bodystart</a>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><a onClick={(event) => handleClick(event, '/')} className="active">Accueil</a></li>
                            <li><a onClick={(event) => handleClick(event, '/story')}>Qui suis-je ?</a></li>
                            <li><a onClick={(event) => handleClick(event, '/programme')}>Programmes</a></li>
                            <li><a onClick={(event) => handleClick(event, '/abonnement')}>Abonnement</a></li>
                            <li><a onClick={(event) => handleClick(event, '/connexion')}>Connexion</a></li>
                            {/* <li><a href="5.transformations.html">Transformations</a></li>
                            <li><a href="6.vossuggestions.html">Vos suggestions</a></li>
                            <li><a href="7.membres.html">Membres (coach)</a></li> */
                            }
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <button className="hamburger" aria-label="Open navigation menu">☰</button>
                    <nav className="nav23">
                        <div className="close-btn">✖</div>
                        <ul>
                            <li className="liststyle1"><a onClick={(event) => handleClick(event, '/')} className="active">Accueil</a></li>
                            <li className="liststyle1"> <a onClick={(event) => handleClick(event, '/story')}>Qui suis-je ?</a></li>
                            <li className="liststyle1"> <a onClick={(event) => handleClick(event, '/programme')}>Programmes</a></li>
                            <li className="liststyle1"> <a onClick={(event) => handleClick(event, '/abonnement')}>Abonnement</a></li>
                            <li className="liststyle1"> <a onClick={(event) => handleClick(event, '/connexion')}>Connexion</a></li>
                        </ul>
                    </nav>
                </div>

                {/* <div className="header-right" id="headerRight">
                    <button
                        id="boutonConnexion"
                        className="connexion-btn"
                        onclick="toggleBurgerMenu()"
                    >
                        Connexion
                    </button>
                </div> */}


                <div id="maburger" className="menu-burger">
                    <div className="burger-bouton">
                        <a href="/Profil/8.1.profil.programme.html" className="bouton-profil"
                        ><button>Profil</button></a
                        >
                        <a href="/Profil/8.1.profil.programme.html" className="bouton-profil"><button>Mes programmes</button></a>
                        <a href="/Profil/8.2.profil.abonnement.html" className="bouton-profil"><button>Gérer l'abonnement</button></a>
                        <a href="/Profil/8.3.profil.paiement.html" className="bouton-profil"><button>Historique de paiement</button></a>

                        <button>Mes suggestions</button>
                        <button>Mon coach</button>
                        <button>FAQ</button>
                        <button>Paramètres du compte</button>
                        <button id="deconnexion">Déconnexion</button>
                        <button className="fermer" id="fermer-burger">&times;</button>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;