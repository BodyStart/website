import '../assets/css/programme.css'

function Programme() {
    return (
        <main className="programmeLayout">
            <div className="placement">
                <div className="programme">
                    <img
                        src="/src/assets/images/Débutant.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2 >Programme de musculation Débutant</h2>
                    <span className="price">€25.00</span>

                    <a href="/Programme/3.1.debutant.html">
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
                <div className="programme">
                    <img
                        src="/src/assets//images/Avancée.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2>Programme de musculation Avancé</h2>
                    <span className="price">€30.00</span>

                    <a href="/Programme/3.2.avance.html">
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
                <div className="programme">
                    <img
                        src="/src/assets//images/Bodybuilder.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2>Programme de musculation Bodybuilder</h2>
                    <span className="price">€35.00</span>

                    <a href="/Programme/3.3.bodybuilder.html">
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
                <div className="programme">
                    <img
                        src="/src/assets//images/Personnalisé.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2>Programme de musculation Personnalisé</h2>
                    <span class="price">€50.00</span>

                    <a href="/Programme/3.4.personnalise.html">
                        <button class="btn-primary">En savoir plus</button>
                    </a>
                </div>
            </div>
        </main>
    );
}
export default Programme;