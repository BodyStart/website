import '../../public/assets/css/sousprogramme.css';
import { useNavigate } from 'react-router-dom';

function BodybuilderProgramme() {
    const navigate = useNavigate();

    function handleClick(event, path) {
        event.preventDefault();
        navigate(path);
    }
    return (
        <main className='sousprogramme'>
            <div className="description">
                <h2><u>Description des programmes Bodybuilders :</u></h2>
                <p>
                    Découvrez nos programmes de bodybuilding basés sur un cycle de 5/6/7
                    jours, conçus pour une progression maximale de votre physique. Ce
                    programme innovant ne se limite pas à une répartition musculaire
                    spécifique par jour, mais plutôt à un cycle dynamique pour des
                    résultats optimaux. Il est particulièrement adapté aux personnes qui
                    possèdent déjà une base musculaire bien développée et qui aspirent à
                    des objectifs esthétiques ou à la compétition.
                </p>
                <p><u>Avantages :</u></p>
                <p>
                    - <u>Cycle de 5/6/7 jours :</u> Notre programme est structuré sur un
                    cycle de 5/6/7 jours, vous permettant de travailler chaque groupe
                    musculaire de manière équilibrée et progressive.
                </p>
                <p>
                    - <u>Progression maximale :</u> Grâce à l'approche en cycle, votre
                    corps sera constamment stimulé et vous pourrez maximiser votre
                    développement musculaire et votre force.
                </p>
                <p>
                    - <u>Adaptation personnalisée :</u> Chaque cycle sera adapté en
                    fonction de vos caractéristiques physiques et de vos objectifs
                    spécifiques, afin d'optimiser les résultats.
                </p>
                <p>
                    - <u>Esthétique et compétition :</u> Que vous souhaitiez améliorer
                    votre esthétique physique ou vous préparer pour la compétition, ce
                    programme répondra à vos aspirations.
                </p>
            </div>

            <div className="placement">
                <div className="programmes">
                    <h2>Programme sur 5 jours</h2>
                    <div>
                        <img src="/assets/images/Bodybuilder/Bodybuilderprogramme1.png" alt="Débutantprogramme1"
                            className="debutant-image" />
                    </div>
                    <div>
                        <h3><u>Descriptif :</u></h3>
                        <hr className="ligne-noir" />
                        <p>- Votre programme</p>
                        <p>- Conseils et astuces nutritions</p>
                        <p>- Explications des compléments alimentaires</p>
                        <p>- Numéro whatsapp pour répondre à vos questions</p>
                        <hr className="ligne-noir" />
                    </div>
                    <button type="button" className="btn-primary" onClick={(event) => handleClick(event, '/programme/demande')}>
                        Choisir
                    </button>
                </div>
                <div className="programmes">
                    <h2>Programme sur 6 jours</h2>
                    <div>
                        <img src="/assets/images/Bodybuilder/Bodybuilderprogramme1.png" alt="Débutantprogramme1"
                            className="debutant-image" />
                    </div>
                    <div>
                        <h3><u>Descriptif :</u></h3>
                        <hr className="ligne-noir" />
                        <p>- Votre programme</p>
                        <p>- Conseils et astuces nutritions</p>
                        <p>- Explications des compléments alimentaires</p>
                        <p>- Numéro whatsapp pour répondre à vos questions</p>
                        <hr className="ligne-noir" />
                    </div>
                    <button type="button" className="btn-primary" onClick={(event) => handleClick(event, '/programme/demande')}>
                        Choisir
                    </button>
                </div>
                <div className="programmes">
                    <h2>Programme sur 7 jours</h2>
                    <div>
                        <img src="/assets/images/Bodybuilder/Bodybuilderprogramme1.png" alt="Débutantprogramme1"
                            className="debutant-image" />
                    </div>
                    <div>
                        <h3><u>Descriptif :</u></h3>
                        <hr className="ligne-noir" />
                        <p>- Votre programme</p>
                        <p>- Conseils et astuces nutritions</p>
                        <p>- Explications des compléments alimentaires</p>
                        <p>- Numéro whatsapp pour répondre à vos questions</p>
                        <hr className="ligne-noir" />
                    </div>
                    <button type="button" className="btn-primary" onClick={(event) => handleClick(event, '/programme/demande')}>
                        Choisir
                    </button>
                </div>
            </div>
        </main>
    );
}


export default BodybuilderProgramme;

