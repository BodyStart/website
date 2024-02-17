import '../assets/css/sousprogramme.css';

function AvanceeProgramme() {
    return (
        <main>
            <div className="description">
                <h2><u>Description des programmes Avancés :</u></h2>
                <p>
                    Découvrez nos programmes de bodybuilding basés sur un split de 4/5/6
                    jours, conçus pour favoriser une croissance musculaire continue. Ce
                    programme structuré en divisant chaque partie du corps vous permettra
                    de cibler spécifiquement les groupes musculaires et de poursuivre
                    votre développement physique. Il est particulièrement adapté aux
                    personnes ayant déjà une base musculaire bien développée et qui
                    souhaitent continuer à progresser.
                </p>
                <p><u>Avantages :</u></p>
                <p>
                    - <u>Split en 4/5/6 jours :</u> Notre programme est organisé en séances sur 4/5/6
                    jours, chaque jour étant dédié à travailler un groupe musculaire
                    spécifique pour une stimulation optimale.
                </p>
                <p>
                    - <u>Croissance musculaire continue :</u> Grâce à l'approche en split, vous
                    pourrez cibler et stimuler chaque partie du corps de manière
                    détaillée, favorisant ainsi une croissance musculaire continue.
                </p>
                <p>
                    - <u>Adaptation personnalisée :</u> Chaque programme sera adapté en fonction
                    de vos caractéristiques physiques et de vos objectifs spécifiques,
                    pour répondre à vos besoins individuels.
                </p>
                <p>
                    - <u>Développement musculaire :</u> Que vous souhaitiez développer davantage
                    votre musculature ou améliorer votre composition corporelle, ce
                    programme vous aidera à atteindre vos objectifs.
                </p>
            </div>

            <div className="placement">
                <div className="programmes">
                    <h2>Programme sur 4 jours</h2>
                    <div>
                        <img src="/src/assets/images/Avancée/Avancéprogramme1.png" alt="Débutantprogramme1"
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
                            data-target="#programmeavancé4Jours">
                        Choisir
                    </button>
                    <div className="modal fade" id="programmeavancé4Jours" tabIndex="-1" role="dialog"
                         aria-labelledby="modalprogrammeavancé4" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalprogrammeavancé4">Programme sur 4 jours</h5>
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
                        <img src="/src/assets/images/Avancée/Avancéprogramme2.png" alt="Débutantprogramme1"
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
                            data-target="#programmeavancé5Jours">
                        Choisir
                    </button>
                    <div className="modal fade" id="programmeavancé5Jours" tabIndex="-1" role="dialog"
                         aria-labelledby="modalprogrammeavancé5" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalprogrammeavancé5">Programme sur 5 jours</h5>
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
                    <h2>Programme sur 6 jours</h2>
                    <div>
                        <img src="/src/assets/images/Avancée/Avancéprogramme3.png" alt="Débutantprogramme1"
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
                            data-target="#programmeavancé6Jours">
                        Choisir
                    </button>
                    <div className="modal fade" id="programmeavancé6Jours" tabIndex="-1" role="dialog"
                         aria-labelledby="modalprogrammeavancé6" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalprogrammeavancé6">Programme sur 6 jours</h5>
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
            </div>
        </main>
    );
}
export default AvanceeProgramme;