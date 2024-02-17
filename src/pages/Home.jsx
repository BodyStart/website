
import '../assets/css/Home.css';

function Home() {
    return (
        <>
            <main>
                <div class="Accueil-background-image"></div>
                <div class="section-titre">
                    <a href="3.0.programme.html"
                    ><h2><u>Transforme toi avec nos programmes :</u></h2></a
                    >
                </div>
                <div class="all-programme">
                    <div class="programme">
                        <img
                            src="/src/assets/images/Débutant.png"
                            alt="programme1"
                            class="programme-image"
                        />
                        <div class="programme-titre">
                            <h3>Débutant</h3>
                            <hr />
                            <a href="/Programme/3.1.debutant.html">
                                <button class="bouton-rejoindre">En savoir plus</button>
                            </a>
                        </div>
                    </div>

                    <div class="programme">
                        <img
                            src="/src/assets/images/Avancée.png"
                            alt="programme2"
                            class="programme-image"
                        />
                        <div class="programme-titre">
                            <h3>Avancée</h3>
                            <hr />
                            <a href="/Programme/3.2.avance.html">
                                <button class="bouton-rejoindre">En savoir plus</button>
                            </a>
                        </div>
                    </div>

                    <div class="programme">
                        <img
                            src="/src/assets/images/Bodybuilder.png"
                            alt="programme3"
                            class="programme-image"
                        />
                        <div class="programme-titre">
                            <h3>Bodybuilder</h3>
                            <hr />
                            <a href="/Programme/3.3.bodybuilder.html">
                                <button class="bouton-rejoindre">En savoir plus</button>
                            </a>
                        </div>
                    </div>

                    <div class="programme">
                        <img
                            src="/src/assets/images/Personnalisé.png"
                            alt="programme4"
                            class="programme-image"
                        />
                        <div class="programme-titre">
                            <h3>Personnalisé</h3>
                            <hr />
                            <a href="/Programme/3.4.personnalise.html">
                                <button class="bouton-rejoindre">En savoir plus</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="section-présentation">
                    <h3><u>Nos programmes sont conçus de la manière suivante :</u></h3>
                    <p>
                        <u>Débutant :</u> L'objectif de ce programme est de vous créer une
                        base musculaire et de commencer à vous affiner ou prendre en volume
                        selon vos objectifs et ensuite vous allez pouvoir évoluer si vous le
                        souhaitez vers un programme avancé.
                    </p>
                    <p>
                        <u>Avancée :</u> L'objectif de ce programme est de vous rendre le
                        plus esthétique possible et avoir un corps équilibré.
                    </p>
                    <p>
                        <u>Bodybuilder :</u> L'objectif de ce programme est de vous faire
                        passer un certain niveau physique et pourquoi pas vous préparer pour
                        une potentielle compétition de bodybuilding.
                    </p>
                    <p>
                        <u>Personnalisé :</u> Ce programme sera fait en fonction de vous et
                        vos caractéristiques physiques, que vous soyez un homme ou une femme,
                        le programme personnalisé vous fera évoluer en fonction de vos
                        attentes et vous rendra le plus esthétique possible.
                    </p>
                </div>
            </main>
        </>
    );
}
export default Home;