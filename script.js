
//Fonction pour verifier les variables
function getValeur(id){
    return document.getElementById(id).value.trim();
}
//ERREUR
function afficherAlerte(msg){
    alert (msg);
}

// fonction pour verifier l'age minimum requise (18ans)
function verifierAge(date) {
    let birthDate = new Date(date);
    let age = new Date().getFullYear() - birthDate.getFullYear();
    return birthDate , age >= 18;
}

// fonction qui travail sur le format du numero de telephone
function verifierFormatNumero(telephone) {
    return /^01\d{8}$/.test(telephone)
}

// fonction pour verifier la longueur du texte de motivation
function verifierMotivation(motivation) {
    return motivation.length >= 1000 || motivation <= 2500;
}

// fontion principale pour la verification du formulaire
function validateForm(prevenir) {
    prevenir.preventDefault();

    let nom = getValeur(`nom`);
    let prenom = getValeur(`prenom`);
    let dateNaissance = getValeur(`date`);
    let numero = getValeur(`telephone`);
    let motivation = getValeur(`motivation`);

    // Tous les champs du formulaire sont obligatoires
    if (!nom || !prenom || !dateNaissance || !numero || !motivation) {
        return afficherAlerte(`Tous les champs sont obligatoires.`);
    }

    // L'utilisateur doit avoir au moins 18 ans avant de s'inscrire (prévenir avec un alert s'il n'a pas l'âge requis)
    if (!verifierAge(dateNaissance)) {
        return afficherAlerte(`Vous devez forcement avoir 18ans avant de postuler`);
    }

    // La motivation doit faire 1000 caractères minimum et 2500 maximum
    if (!verifierMotivation(motivation)) {
        return afficherAlerte(`La motivation doit faire 1000 caractères minimum et 2500 maximum`);
    }

    // Le numéro de téléphone doit respecter le nouveau format des numéros du Bénin (commencer par 01 et contenir 10 chiffres)
    if (!verifierFormatNumero(numero)) {
        return afficherAlerte(`Vous devez forcement commencer par 01 et contenir au total 10 chiffres.`);
    }

    document.getElementById(`resultat`).innerHTML = `
    <h2>Informations soumises</h2>
    <p><strong>Nom:</strong> ${nom}</p>
    <p><strong>Prénom:</strong> ${prenom}</p>
    <p><strong>Date de naissance:</strong> ${dateNaissance}</p>
    <p><strong>Numéro de téléphone:</strong> ${numero}</p>
    <p><strong>Motivation:</strong> ${motivation}</p>`;
    document.getElementById(`resultat`).style.display = `block`;
}
document.querySelector(`#button`).addEventListener(`click`, validateForm);

