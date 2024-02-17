import '../assets/css/abonnement.css'

function Abonnement() {
    return (
        <main>
            <div className="placement">
                <div className="pricing-card">
                    <h2>Entraînement</h2>
                    <h5>Programme sport</h5>
                    <span className="price">€40.00</span>
                    <h5>4 semaines</h5>
                    <h3>Contenu</h3>
                    <ul className="list-group">
                        <li className="truc">- Programme d'entraînement personnalisé</li>
                        <li className="truc">- Conseils exercices</li>
                        <li className="truc">- Bilan toutes les 2 semaines</li>
                        <li className="truc">- Ajustement selon le bilan</li>
                        <li className="truc">- Echange via whatapps</li>
                    </ul>
                    <button className="btn-primary">En savoir plus</button>
                </div>
                <div className="pricing-card">
                    <span className="label-best">Best deal</span>
                    <h2>Complet</h2>
                    <h5>Programme sport + plan alimentaire</h5>
                    <span className="price">€60.00</span>
                    <h5>4 semaines</h5>
                    <h3>Contenu</h3>
                    <ul className="list-group">
                        <li className="truc">- Programme d'entraînement personnalisé</li>
                        <li className="truc">- Plan alimentaire personnalisé</li>
                        <li className="truc">- Bilan toutes les 2 semaines</li>
                        <li className="truc">- Ajustement selon le bilan</li>
                        <li className="truc">- Echange via whatapps</li>
                    </ul>
                    <button className="btn-primary">En savoir plus</button>
                </div>
                <div className="pricing-card">
                    <h2>Nutrition</h2>
                    <h5>Plan alimentaire</h5>
                    <span className="price">€30.00</span>
                    <h5>4 semaines</h5>
                    <h3>Contenu</h3>
                    <ul className="list-group">
                        <li className="truc">- Plan alimentaire personnalisé</li>
                        <li className="truc">- Conseils nutrition</li>
                        <li className="truc">- Bilan toutes les 2 semaines</li>
                        <li className="truc">- Ajustement selon le bilan</li>
                        <li className="truc">- Echange via whatapps</li>
                    </ul>
                    <button className="btn-primary">En savoir plus</button>
                </div>
            </div>
        </main>
    );
}
export default Abonnement;