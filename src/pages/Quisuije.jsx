import { useEffect } from 'react';
import '../../public/assets/css/quisuisje.css'
function Quisuije() {
        useEffect(() => {
            const footer = document.querySelector('footer');
            footer.style.display = 'none';
            return () => {
                footer.style.display = 'block';
            }
        }, []);

    return (
        <>
            <div className="container-fluid">
                <section className="design-section">
                    <div className="timeline">
                        <div className="timeline-empty"></div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p className="col-md-12">Dès l'âge de mes 16 ans, je me suis inscrit dans une salle de sport et j'ai
                                commencé à m'intéresser à la musculation dans le but de m'épaissir et de devenir plus résistant en
                                pratiquant mon sport préféré, le football américain. Pour atteindre cet objectif, je me rendais à la
                                salle de musculation en prenant le bus, essayant d'être régulier malgré mes contraintes scolaires.
                                Initialement, je n'avais aucune connaissance dans le domaine de la musculation, donc j'ai entrepris
                                mes propres recherches sur Internet et j'ai consulté des livres spécialisés.</p>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p className="col-md-12">Une fois que j'ai mis en place un petit programme d'entraînement, mon emploi du
                                temps chargé entre le football américain, la musculation, les études et les cours particuliers a
                                rendu les choses difficiles à gérer. J'ai donc pris la décision difficile d'abandonner le football
                                américain pour faire de la musculation ma passion principale. Au fil du temps, j'ai commencé à
                                prendre de plus en plus de plaisir à m'entraîner et à fréquenter assidûment la salle de musculation.
                                J'ai constaté des résultats physiques et des performances qui s'amélioraient, ce qui renforçait ma
                                motivation.</p>
                        </div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-empty"></div>
                        <div className="timeline-empty"></div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p className="col-md-12">Arrivé à l'université à mes 18 ans, j'ai continué à pratiquer la musculation tout
                                en suivant mes cours. Cependant, j'ai commencé à ressentir une stagnation et une certaine
                                frustration. J'étais perplexe car j'estimais exécuter correctement les mouvements, utiliser des
                                charges appropriées et suivre un programme bien structuré. Je me suis donc remis en question et j'ai
                                entrepris une réévaluation complète de ma vision du bodybuilding. La musculation est passée d'un
                                simple sport à un art, le bodybuilding. J'ai commencé à adopter une mentalité de bodybuilder et à
                                m'inspirer des méthodes d'entraînement utilisées par les professionnels de ce domaine.</p>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p className="col-md-12">Finalement, grâce à ces nouvelles connaissances et à mes propres résultats
                                physiques, j'ai décidé de me lancer dans le coaching pour partager ma passion et mon amour pour le
                                bodybuilding. Je souhaite transmettre cette
                                passion et aider les autres à atteindre leurs objectifs physiques et personnels grâce à cette
                                discipline unique.</p>
                        </div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-empty"></div>
                    </div>
                </section>
                <div className="section-title borderTitle">
                    <h3>Ma vision du Bodybuilding</h3>
                </div>
                <section className="design-section mt-4">
                    <div className="timeline">
                        <div className="timeline-empty"></div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p>Le Bodybuilding, à mes yeux, est bien plus qu'une simple pratique sportive. C'est une véritable
                                forme d'art, où notre corps devient une sculpture vivante et nos choix quotidiens deviennent les
                                pinceaux qui le
                                façonnent. Comme un artiste devant sa toile blanche, nous sommes maîtres de chaque mouvement,
                                chaque repas, chaque instant de repos et chaque séance d'entraînement.</p>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p>Chaque séance à la salle de sport devient une danse minutieuse, où les mouvements doivent être
                                exécutés avec une précision et un contrôle absolu. Chaque contraction musculaire est une
                                expression de puissance
                                et de grâce, tout comme un artiste traçant des lignes sur sa toile. Chaque haltère soulevé,
                                chaque répétition
                                effectuée est un coup de pinceau qui contribue à sculpter notre corps selon notre vision
                                artistique.</p>
                        </div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-empty"></div>
                        <div className="timeline-empty"></div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p>Mais le bodybuilding ne se limite pas à l'effort physique. Il englobe également une discipline
                                de vie, où chaque aspect est soigneusement pris en compte. L'alimentation devient une palette de
                                couleurs, chaque
                                repas étant une occasion de nourrir notre corps avec les bons nutriments pour favoriser la
                                croissance musculaire
                                et l'énergie nécessaire à notre art. Le repos et la récupération deviennent des moments
                                privilégiés pour permettre
                                à notre corps de se régénérer, de se reconstruire et de devenir plus fort. Même le stress,
                                souvent perçu comme un
                                obstacle, peut être apprivoisé et transformé en carburant pour notre motivation.</p>
                        </div>
                        <div className="timeline-component timeline-content">
                            <p>Le Bodybuilding, c'est donc bien plus qu'un simple sport. C'est une
                                quête artistique, une
                                passion qui nous pousse à repousser nos limites et à modeler notre corps comme un sculpteur crée
                                une œuvre d'art.
                                C'est un voyage où chaque mouvement, chaque choix et chaque instant sont empreints d'intention
                                et de
                                détermination. Et le résultat final est bien plus qu'une simple apparence physique, c'est une
                                expression de notre
                                dévouement, de notre persévérance et de notre amour pour cet art vivant qu'est le
                                bodybuilding.</p>
                        </div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-empty"></div>
                    </div>
                </section>

            </div>

        </>
    );
}
export default Quisuije;