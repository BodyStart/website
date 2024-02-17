import '../assets/css/sousprogramme.css';

function DebutantProgramme() {
    return (
        <main>
            <div className="description">
                <h2><u>Description des programmes Débutants:</u></h2>
                <p>
                    Découvrez nos programmes de bodybuilding débutant basés sur 3/4/5
                    jours, spécialement conçus pour les personnes débutantes qui
                    souhaitent assurer une prise de muscle globale sur l'ensemble du
                    corps. Ce programme structuré vous permettra de travailler tous les
                    groupes musculaires de manière équilibrée, favorisant ainsi une
                    progression harmonieuse de votre développement physique.
                </p>
                <p><u>Avantages :</u></p>
                <p>
                    - <u>Full Body sur 3/4/5 jours :</u> Notre programme est conçu pour vous
                    entraîner sur l'ensemble du corps en seulement 3/4/5 jours, vous
                    permettant ainsi d'optimiser votre temps d'entraînement.
                </p>
                <p>
                    - <u>Prise de muscle globale :</u> L'approche Full Body vous permettra
                    de cibler tous les groupes musculaires, garantissant une prise de
                    muscle équilibrée et harmonieuse sur l'entièreté du corps.
                </p>
                <p>
                    - <u>Adaptation pour débutants :</u> Chaque séance est adaptée pour
                    les débutants, avec des exercices appropriés,
                    favorisant ainsi une progression sûre et efficace.
                </p>
                <p>
                    - <u>Encadrement pour le succès :</u> Notre équipe d'experts sera là
                    pour vous guider, répondre à vos questions et vous soutenir tout au
                    long de votre parcours de prise de muscle.
                </p>
            </div>

            <div className="placement">
                <div className="programmes">
                    <h2>Programme sur 3 jours</h2>
                    <div>
                        <img src="/src/assets/images/Débutant/Débutantprogramme1.png" alt="Débutantprogramme1"
                             className="debutant-image"/>
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
                    <button type="button" className="btn-primary" data-toggle="modal"
                            data-target="#programmedébutant3Jours">
                        Choisir
                    </button>
                    <div className="modal fade" id="programmedébutant3Jours" tabIndex="-1" role="dialog"
                         aria-labelledby="modalprogrammedébutant3" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalprogrammedébutant3">Programme sur 3 jours</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSfl_0ja9vy6R3NT2VQV7Gatvk8rMjOIO4tS8h5X9J2sKQg2eA/viewform?embedded=true"
                                        width="300" height="800" frameBorder="0" marginHeight="0" marginWidth="0">
                                        Chargement…
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="programmes">
                    <h2>Programme sur 4 jours</h2>
                    <div>
                        <img src="/src/assets/images/Débutant/Débutantprogramme2.png" alt="Débutantprogramme2"
                             className="debutant-image"/>
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
                    <button type="button" className="btn-primary" data-toggle="modal"
                            data-target="#programmedébutant4Jours">
                        Choisir
                    </button>
                    <div className="modal fade" id="programmedébutant4Jours" tabIndex="-1" role="dialog"
                         aria-labelledby="modalprogrammedébutant4" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalprogrammedébutant4">Programme sur 4 jours</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSfl_0ja9vy6R3NT2VQV7Gatvk8rMjOIO4tS8h5X9J2sKQg2eA/viewform?embedded=true"
                                        width="300" height="800" frameBorder="0" marginHeight="0" marginWidth="0">
                                        Chargement…
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="programmes">
                    <h2>Programme sur 5 jours</h2>
                    <div>
                        <img src="/src/assets/images/Débutant/Débutantprogramme3.png" alt="Débutantprogramme2" className="debutant-image"/>
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
                    <button type="button" className="btn-primary" data-toggle="modal" data-target="#programmedébutant4Jours">
                        Choisir
                    </button>
                    <div className="modal fade" id="programmedébutant4Jours" tabIndex="-1" role="dialog" aria-labelledby="modalprogrammedébutant4" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalprogrammedébutant4">Programme sur 5 jours</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfl_0ja9vy6R3NT2VQV7Gatvk8rMjOIO4tS8h5X9J2sKQg2eA/viewform?embedded=true" width="300" height="800" frameBorder="0" marginHeight="0" marginWidth="0">
                                        Chargement…
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DebutantProgramme;