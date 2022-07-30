// LES CLASSES EN JS *

/*Definition de la classe  : ->une classe est un modele pour un objet dans le code  --> permet de construire plusieurs objets du meme type appeles instances (de la mm classe) plus facilement , rapidemment et en tte fiabilite
                             ->La construction d un objet a la main par la notation a accolades convient bien a des objets simples et uniques
                             ->mais lorsqu'ont a besoin de beaucoup  d objets du meme type c est la que les classes sont utiles 
                             



                             //Comment Construire une classe dans le code 


Mot-clé class suivi par un nom (premiere lettre en majscule) - ensuite on utilise le constructor 
*/

let Livre = class Livre{
constructor(titre , auteur , nbrePages){
this.titre = titre;
this.auteur = auteur;
this.nbrePages = nbrePages;
}
};

// mnt que la classe est terminé , on peut creer des instances par le mot cle new 

let monLivre = new Livre("l'alchimiste" ,"paulo coelho" , 285)        // -> va cree l objet suivant { titre: "l alchimiste" , auteur: "paulo coelho", nbrePages: 285}
console.log(monLivre);

let monLivre2 = new Livre("holy Book", "unknown", 114)
console.log(monLivre2);
  