function Header() {
    return (
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
                    <a href="../index.html">Bodystart</a>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="../index.html" class="active">Accueil</a></li>
                        <li><a href="2.quisuisje.html">Qui suis-je ?</a></li>
                        <li><a href="3.0.programme.html">Programmes</a></li>
                        <li><a href="4.abonnement.html">Abonnement</a></li>
                        {/* <li><a href="5.transformations.html">Transformations</a></li>
        <li><a href="6.vossuggestions.html">Vos suggestions</a></li>
        <li><a href="7.membres.html">Membres (coach)</a></li> */}
                    </ul>
                </nav>
            </div>

            <div class="header-right">
                <button class="hamburger" aria-label="Open navigation menu">☰</button>
                <nav class="nav23">
                    <div class="close-btn">✖</div>
                    <ul>
                        <li class="liststyle1"><a href="../index.html" class="active">Accueil</a></li>
                        <li class="liststyle1"> <a href="2.quisuisje.html">Qui suis-je ?</a></li>
                        <li class="liststyle1"> <a href="3.0.programme.html">Programmes</a></li>
                        <li class="liststyle1"> <a href="4.abonnement.html">Abonnement</a></li>
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
  </div>  */}

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
    );
}
export default Header;