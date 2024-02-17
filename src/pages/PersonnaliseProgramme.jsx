import '../../public/assets/css/sousprogramme.css';
import { useNavigate } from 'react-router-dom';

function PersonnaliseProgramme() {
    const navigate = useNavigate();

    function handleClick(event, path) {
        event.preventDefault();
        navigate(path);
    }
    return (
        <main className='sousprogramme'>
            <div className="description">
                <h2><u>Description du programme personnalisé:</u></h2>
                <p>
                    Découvrez nos programmes de bodybuilding 100% personnalisés conçus
                    spécialement par mes soins. Chaque programme est adapté à vos
                    caractéristiques physiques uniques, telles que votre sexe, poids,
                    taille, longueur des membres et insertions musculaires. De plus, ces
                    programmes sont flexibles et s'ajustent parfaitement à votre emploi du
                    temps chargé.
                </p>
                <p><u>Avantages :</u></p>
                <p>
                    - <u>Programme sur mesure :</u> Bénéficiez d'un programme de
                    bodybuilding spécialement conçu pour vous, en tenant compte de vos
                    besoins et objectifs individuels.
                </p>
                <p>
                    - <u>Adaptation complète :</u> Votre programme sera ajusté selon vos
                    caractéristiques physiques spécifiques, garantissant une approche
                    personnalisée pour des résultats optimaux.
                </p>
                <p>
                    - <u>Flexibilité horaire :</u> Nos programmes s'adaptent à votre
                    emploi du temps chargé, vous permettant de concilier facilement vos
                    séances d'entraînement avec vos autres engagements.
                </p>
                <p>
                    - <u>Maximisation des résultats :</u> Grâce à une approche
                    personnalisée, vous pourrez optimiser votre développement musculaire,
                    votre force et votre définition physique.
                </p>
            </div>

            <div className="placement">
                <div className="programmes">
                    <h2>Programme adaptatif</h2>
                    <div>
                        <img src="/assets/images/Personnalisé.png" alt="Débutantprogramme1" className="debutant-image"/>
                    </div>
                    <div>
                        <h3><u>Descriptif :</u></h3>
                        <hr className="ligne-noir"/>
                        <p>- Votre programme</p>
                        <p>- Conseils et astuces nutritions</p>
                        <p>- Explications des compléments alimentaires</p>
                        <p>- Numéro whatsapp pour répondre à vos questions</p>
                        <hr className="ligne-noir"/>
                    </div>
                    <button type="button" className="btn-primary" onClick={(event) => handleClick(event, '/programme/demande')}>
                        Choisir
                    </button>
                </div>
            </div>
        </main>
    )
}

export default PersonnaliseProgramme;