const arbreDecision = {

    1: {label: "Problème de scanner «perso»:",reponses: [6,7,8,9],autres: "", racine: true},

    2: {label: "Problème de scanner en réseau : ",reponses: [10,11,12],autres: "", racine: true},

    3: {label: "Pas de réseau : ",reponses: [13,14,15],autres: "", racine: true},

    4: {label: "Ne reçoit pas de mail LDAP : ",reponses: [16,17],autres: "", racine: true},

    5: {label: "Problème d’affichage (écran) : ",reponses: [18,19],autres: "", racine: true},


    6: {label: "Le scanner est bien allumé ? ",reponses: ["Non : allumer le scanner ","Oui: ",7],autres: "", racine: false},

    7: {label: "Le scanner est-il bien branché en USB sur le poste ? ",reponses: ["Non : brancher le scanner","Oui: ",8],autres: "", racine: false},

    8: {label: "Essayer de la brancher sur une autre prise USB ? ",reponses: ["Non : brancher sur une autre prise USB ","Oui: ",9],autres: "", racine: false},

    9: {label: "Avez-vous essayé de changer le câble USB ? ",reponses: ["Non : tester avec un autre câble si possible ","Oui : se connecter en VNC pour la partie configuration du scanner et installation des pilotes "],autres: "", racine: false},

    10: {label: "Le scanner est bien allumé ? ",reponses: ["Non : allumer le scanner ","Oui: ",11],autres: "", racine: false},

    11: {label: "Le scan fonctionnait avant ? ",reponses: ["Non : se connecter en VNC et configurer le carnet d’adresse sur le scanner ","Oui: ",12],autres: "", racine: false},

    12: {label: "Est-ce que le/la voisin/e a le même problème ?  ",reponses: ["Non : se connecter en VNC et vérifier la disponibilité du scanner et la configuration ", "Oui : Problème de scanner ou du réseau  "],autres: "", racine: false},

    13: {label: "Poste bien allumé ? ",reponses: ["Non : allumer le poste ","Oui: ",14],autres: "", racine: false},

    14: {label: "Câble réseau bien branché ? ",reponses: ["Non : brancher le câble réseau ","Oui: ",15],autres: "", racine: false},

    15: {label: "Est-ce que le/la voisin/e a le même problème ? ",reponses: ["Non : brancher le poste sur une autre prise réseau si possible ", "Oui: ","Problème général, se renseigner auprès de la DSI ","Si ce n’est pas général, escalader le ticket à terrain "],autres: "", racine: false},

    16: {label: "Thunderbird a-t-il été configuré ? ",reponses: ["Non : configurer Thunderbird ","Oui: ",17],autres: "", racine: false},

    17: {label: "Possédez-vous ou avez-vous fait une demande pour une adresse mail en administration.gov.pf ? ",reponses: ["Non : escalader le ticket à “compte LDAP/M365” pour vérifier que le compte est toujours actif ", "Oui : vérifier que les mails arrivent bien sur la boîte mail en administration.gov.pf "],autres: "", racine: false},

    18: {label: "Les câbles sont-ils bien branchés à l’arrière de l’écran et du poste ? ",reponses: ["Non : faire le nécessaire ","Oui: ",19],autres: "", racine: false},

    19: {label: "Avez-vous testé de brancher l’écran sur un autre poste ? ",reponses: ["Non : faire un test ", "Oui : Envoyer le ticket à “Panne” "],autres: "", racine: false},


};