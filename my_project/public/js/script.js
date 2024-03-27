let historique = [];
let relatedOFF = true;

// Fonction pour afficher les questions racines
function afficherQuestions(arbre, parentElement) {

    for (const key in arbre) {

        if (arbre[key].racine === true) {

            const currentLevelNode = arbre[key];
            const div = document.createElement('div');
            parentElement.appendChild(div);

            const questionElement = document.createElement('button');
            questionElement.textContent = currentLevelNode.label;
            questionElement.style.cursor = "pointer";
            questionElement.classList.add('btn', 'btn-primary');
            div.appendChild(questionElement);

            histElement.classList.add('hidden')

            questionElement.addEventListener('click', () => {

                // Ajoutez la classe hidden pour déclencher la transition de l'opacité
                treeElement.classList.add('hidden');

                setTimeout(() => {

                    treeElement.innerHTML = "";

                    const clickedQuestionElement = document.createElement('div');
                    clickedQuestionElement.textContent = currentLevelNode.label;
                    clickedQuestionElement.classList.add('question',"text-decoration-underline","fw-bold");
                    parentElement.appendChild(clickedQuestionElement);

                    const questionId = key;
                    historique.push(key)

                    // Mettez à jour la visibilité du bouton en fonction de la présence de contenu dans treeElement
                    returnButton.style.display = treeElement.innerHTML.trim() !== '' ? 'block' : 'none';

                    // Supprimez la classe hidden pour afficher le contenu avec une nouvelle transition d'opacité
                    treeElement.classList.remove('hidden');
                    histElement.classList.remove('hidden');

                    afficherReponse(currentLevelNode, parentElement);

                    RajouterHistorique(arbreDecision,key);


                    if (currentLevelNode.autres) {

                        // Ajout du bouton "Related"
                        const relatedButton = document.createElement('button');
                        relatedButton.textContent = "Related";
                        relatedButton.style.cursor = "pointer";
                        relatedButton.classList.add('related-button', 'btn', 'btn-primary');
                        parentElement.appendChild(relatedButton);

                        afficherAutresQuestions(arbre, parentElement, questionId);

                        const rela = document.getElementById('ul');

                        rela.classList.add('hidden');

                        relatedButton.addEventListener('click', () => {
                            if (relatedOFF === false){

                                relatedOFF = true;
                                rela.classList.add('hidden');

                            }else {

                                relatedOFF = false;
                                rela.classList.remove('hidden');

                            }

                        });

                    }

                },300);


            });

        }
    }

}


// Fonction récursive pour afficher les autres questions
function afficherAutresQuestions(arbre, parentElement, questionId) {

    const ul = document.createElement('ul');
    ul.id = "ul";
    parentElement.appendChild(ul);

    relatedOFF = true;

    if (arbre[questionId].autres !== null){
        const autreIds = arbre[questionId].autres;

        // Afficher les questions associées
        if (autreIds && autreIds.length > 0) {
            autreIds.forEach((autreId) => {

                const li = document.createElement('li');
                ul.appendChild(li);

                const question = arbre[autreId].label;

                const AutreQuestionElement = document.createElement('button');
                AutreQuestionElement.textContent = question;
                AutreQuestionElement.style.cursor = "pointer";
                AutreQuestionElement.classList.add('btn', 'btn-primary');
                li.appendChild(AutreQuestionElement);


                AutreQuestionElement.addEventListener('click', () => {

                    // Ajoutez la classe hidden pour déclencher la transition de l'opacité
                    treeElement.classList.add('hidden');

                    historique.push(autreId);

                    setTimeout(() => {

                        treeElement.innerHTML = "";

                        const QuestionElementReboot = document.createElement('div');
                        QuestionElementReboot.textContent = question;
                        QuestionElementReboot.classList.add('question', "text-decoration-underline", "fw-bold")
                        parentElement.appendChild(QuestionElementReboot);

                        afficherReponse(arbre[autreId], parentElement);
                        RajouterHistorique(arbreDecision,autreId);

                        if (arbre[autreId].autres) {

                            // Ajout du bouton "Related"
                            const relatedButton = document.createElement('button');
                            relatedButton.textContent = "Related";
                            relatedButton.style.cursor = "pointer";
                            relatedButton.classList.add('related-button', 'btn', 'btn-primary');
                            parentElement.appendChild(relatedButton);

                            afficherAutresQuestions(arbre, parentElement, autreId);

                            const rela = document.getElementById('ul');

                            rela.classList.add('hidden');

                            relatedButton.addEventListener('click', () => {

                                if (relatedOFF === false){

                                    relatedOFF = true;
                                    rela.classList.add('hidden');

                                }else {

                                    relatedOFF = false;
                                    rela.classList.remove('hidden');

                                }

                            });

                        }

                        // Supprimez la classe hidden pour afficher le contenu avec une nouvelle transition d'opacité
                        treeElement.classList.remove('hidden');


                    },300);



                });


            });
        }
    }

}


// Fonction pour afficher la réponse
function afficherReponse(node, parentElement) {

    const reponses = node.reponses

    if (reponses !== ""){

        reponses.forEach((element) => {
            if (typeof element === 'string'){

                const reponseElement = document.createElement('div');
                reponseElement.textContent = element;
                reponseElement.classList.add('answer')
                parentElement.appendChild(reponseElement);

            }else {

                const reponseElement = document.createElement('div');
                reponseElement.textContent = arbreDecision[element].label;
                reponseElement.style.cursor = "pointer";
                reponseElement.classList.add('answer' , 'quest');
                parentElement.appendChild(reponseElement);

                reponseElement.addEventListener('click', () => {
                    // Ajoutez la classe hidden pour déclencher la transition de l'opacité
                    treeElement.classList.add('hidden');

                    // Mettez à jour la visibilité du bouton en fonction de la présence de contenu dans treeElement
                    returnButtonRacine.style.display = treeElement.innerHTML.trim() !== '' ? 'block' : 'none';

                    historique.push(element)

                    setTimeout(() => {

                        treeElement.innerHTML = "";

                        const QuestionElementReboot = document.createElement('div');
                        QuestionElementReboot.textContent = arbreDecision[element].label;
                        QuestionElementReboot.classList.add('question',"text-decoration-underline","fw-bold")
                        parentElement.appendChild(QuestionElementReboot);

                        afficherReponse(arbreDecision[element], parentElement);
                        RajouterHistorique(arbreDecision,element);


                        if (arbreDecision[element].autres) {

                            // Ajout du bouton "Related"
                            const relatedButton = document.createElement('button');
                            relatedButton.textContent = "Related";
                            relatedButton.style.cursor = "pointer";
                            relatedButton.classList.add('related-button', 'btn', 'btn-primary');
                            parentElement.appendChild(relatedButton);

                            afficherAutresQuestions(arbreDecision, parentElement, element);

                            const rela = document.getElementById('ul');

                            rela.classList.add('hidden');

                            relatedButton.addEventListener('click', () => {


                                if (relatedOFF === false){

                                    relatedOFF = true;
                                    rela.classList.add('hidden');

                                }else {

                                    relatedOFF = false;
                                    rela.classList.remove('hidden');

                                }

                            });

                        }

                        // Supprimez la classe hidden pour afficher le contenu avec une nouvelle transition d'opacité
                        treeElement.classList.remove('hidden');

                    },300);
                });

            }
        });

    }
}


const returnButton = document.getElementById('returnButton');

returnButton.addEventListener('click', () => {
    // Ajoutez la classe hidden pour déclencher la transition de l'opacité
    treeElement.classList.add('hidden');

    setTimeout(() => {

        // Supprimez tous les éléments enfants de treeElement
        while (treeElement.firstChild) {
            treeElement.removeChild(treeElement.firstChild);
        }

        if (historique.length === 1){

            afficherQuestions(arbreDecision, treeElement);
            supprimerHistorique(historique[historique.length - 1]);
            historique.pop()
            returnButton.style.display = 'none';
            returnButtonRacine.style.display = 'none';

        } else {

            // vérifie si il y a des noeuds dans la propriété autre
            if (arbreDecision[historique[historique.length - 2]].autres !== ""){
                treeElement.innerHTML = "";

                //affiche question
                const QuestionElementReboot = document.createElement('div');
                QuestionElementReboot.textContent = arbreDecision[historique[historique.length - 2]].label;
                QuestionElementReboot.classList.add('question',"text-decoration-underline","fw-bold")
                treeElement.appendChild(QuestionElementReboot);

                afficherReponse(arbreDecision[historique[historique.length - 2]], treeElement)

                // Ajout du bouton "Related"
                const relatedButton = document.createElement('button');
                relatedButton.textContent = "Related";
                relatedButton.style.cursor = "pointer";
                relatedButton.classList.add('related-button', 'btn', 'btn-primary');
                treeElement.appendChild(relatedButton);

                afficherAutresQuestions(arbreDecision, treeElement, historique[historique.length - 2]);

                // permet de cacher ou d'afficher le contenu du bouton related
                const rela = document.getElementById('ul');

                rela.classList.add('hidden');

                relatedButton.addEventListener('click', () => {

                    if (relatedOFF === false){

                        relatedOFF = true;
                        rela.classList.add('hidden');

                    }else {

                        relatedOFF = false;
                        rela.classList.remove('hidden');

                    }

                });

                supprimerHistorique(historique[historique.length - 1]);

                historique.pop();


            } else{
                treeElement.innerHTML = "";

                const QuestionElementReboot = document.createElement('div');
                QuestionElementReboot.textContent = arbreDecision[historique[historique.length - 2]].label;
                QuestionElementReboot.classList.add('question',"text-decoration-underline","fw-bold");
                treeElement.appendChild(QuestionElementReboot);

                afficherReponse(arbreDecision[historique[historique.length - 2]], treeElement);
                supprimerHistorique(historique[historique.length - 1]);

                historique.pop();
            }

        }

        // Supprimez la classe hidden pour afficher le contenu avec une nouvelle transition d'opacité
        treeElement.classList.remove('hidden');

    }, 300);

});



const returnButtonRacine = document.getElementById('returnButtonRacine');

returnButtonRacine.addEventListener('click', () => {
    // Ajoutez la classe hidden pour déclencher la transition de l'opacité
    treeElement.classList.add('hidden');

    setTimeout(() => {

        // Supprimez tous les éléments enfants de treeElement
        while (treeElement.firstChild) {
            treeElement.removeChild(treeElement.firstChild);
        }

        while (historique.length > 0) {

            supprimerHistorique(historique[historique.length - 1]);
            historique.pop();

        }

        afficherQuestions(arbreDecision, treeElement);

        returnButton.style.display = 'none';
        returnButtonRacine.style.display = 'none';

        // Supprimez la classe hidden pour afficher le contenu avec une nouvelle transition d'opacité
        treeElement.classList.remove('hidden');

    }, 300);
});


function RajouterHistorique(arbre,ID) {

    let numPastId;
    if (arbre[ID].racine !== true) {
        const hist = document.createElement('div');
        hist.textContent = arbre[ID].label;
        hist.id = ID;
        hist.classList.add('question')
        histElement.appendChild(hist);

        if (historique.length > 2) {
            numPastId = historique[historique.length - 2];
            const past = document.getElementById(numPastId);
            const ul = document.createElement('ul')

            const li = document.createElement('li');
            li.textContent = "Oui";
            ul.appendChild(li)
            past.appendChild(ul);
        }


    } else {
        const hist = document.createElement('div');
        hist.textContent = arbre[ID].label;
        hist.id = ID;
        hist.classList.add('question')
        histElement.appendChild(hist);
    }

}


function supprimerHistorique(ID) {
    const Asupprimer = document.getElementById(ID);
    if (Asupprimer !== null){
        histElement.removeChild(Asupprimer);

        if (historique.length > 2){

            let removeYesId = historique[historique.length - 2];
            const removeYes = document.getElementById(removeYesId)
            const ulElement = removeYes.querySelector("ul");

            if (ulElement !== null){
                removeYes.removeChild(ulElement);
            }

        }
    }

}


function rechercherDansRacine() {
    // Code de recherche dans la racine
    const champRecherche = document.getElementById("champRecherche").value.toLowerCase();
    const resultatRecherche = [];
    const resultKey = [];

    for (const key in arbreDecision) {
        if (arbreDecision.hasOwnProperty(key)) {
            const noeud = arbreDecision[key];
            if (noeud.racine === true && noeud.label.toLowerCase().includes(champRecherche)) {
                resultatRecherche.push(noeud);
                resultKey.push(key);

            }
        }
    }

    treeElement.innerHTML = "";
    for (const key in resultatRecherche) {

        const div = document.createElement('div');
        treeElement.appendChild(div);

        const questionElement = document.createElement('button');
        questionElement.textContent = resultatRecherche[key].label;
        questionElement.style.cursor = "pointer";
        questionElement.classList.add('btn', 'btn-primary');
        div.appendChild(questionElement);

        questionElement.addEventListener('click', () => {

            document.getElementById("champRecherche").value = "";

            // Ajoutez la classe hidden pour déclencher la transition de l'opacité
            treeElement.classList.add('hidden');

            setTimeout(() => {

                treeElement.innerHTML = "";

                const clickedQuestionElement = document.createElement('div');
                clickedQuestionElement.textContent = resultatRecherche[key].label;
                clickedQuestionElement.classList.add('question');
                treeElement.appendChild(clickedQuestionElement);

                const questionId = resultKey[key];
                historique.push(resultKey[key])

                // Mettez à jour la visibilité du bouton en fonction de la présence de contenu dans treeElement
                returnButton.style.display = treeElement.innerHTML.trim() !== '' ? 'block' : 'none';

                // Supprimez la classe hidden pour afficher le contenu avec une nouvelle transition d'opacité
                treeElement.classList.remove('hidden');

                afficherReponse(resultatRecherche[key], treeElement);

                RajouterHistorique(arbreDecision,resultKey[key]);


                if (resultatRecherche[key].autres) {

                    // Ajout du bouton "Related"
                    const relatedButton = document.createElement('button');
                    relatedButton.textContent = "Related";
                    relatedButton.style.cursor = "pointer";
                    relatedButton.classList.add('related-button', 'btn', 'btn-primary');
                    treeElement.appendChild(relatedButton);

                    afficherAutresQuestions(resultatRecherche, treeElement, questionId);

                    const rela = document.getElementById('ul');

                    rela.classList.add('hidden');

                    relatedButton.addEventListener('click', () => {
                        if (relatedOFF === false){

                            relatedOFF = true;
                            rela.classList.add('hidden');

                        }else {

                            relatedOFF = false;
                            rela.classList.remove('hidden');

                        }

                    });

                }

            },300);


        });

    }
}



const treeElement = document.getElementById('tree');
const histElement = document.getElementById('historique');

// Appel de la fonction pour afficher les questions racines
afficherQuestions(arbreDecision, treeElement, 0);