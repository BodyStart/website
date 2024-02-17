import '../../public/assets/css/programme.css'
import {useNavigate} from "react-router-dom";

function Programme() {
    const navigate = useNavigate();

    function handleClick(event, path) {
        event.preventDefault();
        navigate(path);
    }
    return (
        <main className="programmeLayout">
            <div className="placement">
                <div className="programme">
                    <img
                        src="/public/assets/images/Débutant.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2 >Programme de musculation Débutant</h2>
                    <span className="price">€25.00</span>

                    <a onClick={(event) => handleClick(event, '/programme/debutant')}>
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
                <div className="programme">
                    <img
                        src="/public/assets/images/Avancée.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2>Programme de musculation Avancé</h2>
                    <span className="price">€30.00</span>

                    <a onClick={(event) => handleClick(event, '/programme/avancee')}>
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
                <div className="programme">
                    <img
                        src="/public/assets/images/Bodybuilder.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2>Programme de musculation Bodybuilder</h2>
                    <span className="price">€35.00</span>

                    <a onClick={(event) => handleClick(event, '/programme/bodybuilder')}>
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
                <div className="programme">
                    <img
                        src="/public/assets/images/Personnalisé.png"
                        alt="programme1"
                        className="programme-image"
                    />
                    <h2>Programme de musculation Personnalisé</h2>
                    <span className="price">€50.00</span>

                    <a onClick={(event) => handleClick(event, '/programme/personnalise')}>
                        <button className="btn-primary">En savoir plus</button>
                    </a>
                </div>
            </div>
        </main>
    );
}
export default Programme;