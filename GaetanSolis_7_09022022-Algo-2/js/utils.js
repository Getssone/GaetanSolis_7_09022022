//pour normalisé les ecrit de tous les termes
function normalise(str) {
  return str
    .normalize("NFD")//renvoyer la forme normalisée Unicode d'une chaîne de caractères
    .replace(/[\u0300-\u036f]/g,"")//remplace les caractéres spéciaux et les accents par des espaces
    .toLowerCase();//mets en petite police de caractere
}
//pour normalisé tous les noms (ex: tags,création des id)
function normaliseName(str) {
  return str
    .normalize("NFD")//renvoyer la forme normalisée Unicode d'une chaîne de caractères
    .replace(/[\u0300-\u036f]/g, "")//remplace les caractéres spéciaux et les accents
    .replace(/[\ -\']/g, "-")//remplace par des tirets les espace et les appostrophe
    .toLowerCase()//mets en petite police de caractere
    .replace(/[\(-\)]/g, "");// les parenthèse sont remplacé par des espaces
}
//pour normalisé les recherche input dropdown
function normaliseForSearch(str) {
  return str

    .normalize("NFD")//renvoyer la forme normalisée Unicode d'une chaîne de caractères
    .replace(/[\u0300-\u036f]/g, "")//remplace les caractéres spéciaux et les accents par des espaces
    .toLowerCase()//mets en petite police de caractere
    .replace(/[\(-\)]/g, "")// les parenthèse sont remplacé par des espaces
    .replace(/[^a-zA-Z ]/g, " "); //Remplace tous les caractéres hormis ceux entre a-z et A-Z
}
//trier l'ensemble d'une list
function sortSet(setList) {
  let list = Array.from(setList).sort();
  return new Set(list);
}