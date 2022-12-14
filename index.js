                                                                    // LES CLASSES EN JS *

/*Definition de la classe  : ->une classe est un modele pour un objet dans le code  --> permet de construire plusieurs objets du meme type appeles instances (de la mm classe) plus facilement , rapidemment et en tte fiabilite
                             ->La construction d un objet a la main par la notation a accolades convient bien a des objets simples et uniques
                             ->mais lorsqu'ont a besoin de beaucoup  d objets du meme type c est la que les classes sont utiles 
                             



                                                        //Comment Construire une classe dans le code************* 


Mot-clé class suivi par un nom (premiere lettre en majscule) - ensuite on utilise le constructor 
*/

let Livre = class Livre {                       //-> si je veux je declare class livre dans une fonction et je marque juste class sans livre , ca fonctionnera egalement
    constructor(titre, auteur, nbrePages) {
        this.titre = titre;
        this.auteur = auteur;
        this.nbrePages = nbrePages;
    }
};

// mnt que la classe est terminé , on peut creer des instances par le mot cle new 

let livre = new Livre("l'alchimiste", "paulo coelho", 285)        // -> va cree l objet suivant { titre: "l alchimiste" , auteur: "paulo coelho", nbrePages: 285}
console.log(livre);

let monLivre2 = new Livre("holy Book", "unknown", 114)
console.log(monLivre2);



      //*  CREE UNE SOUS CLASSE AVEC EXTENDS  --> permet de crée une classe qui herite d 'une autre classe (appelée sous-classe ou classe fille )****************
document.querySelector("demo");

class Animal {
    constructor(nom) {
      this.nom = nom;
    }
  
    present() {                         //-> methode
      return 'i have a'+ this.nom;              
    }
  }
  
  // Si on déclare un constructeur dans une classe fille, on doit utiliser super() avant this.

  class Chien extends Animal {
    constructor(nom, race) {
      super(nom); // appelle le constructeur parent avec le paramètre
      this.race = race;
    }
    show() {
        return this.present() + ', this is a' + this.race ; 
      
    }
  }
let myAnimal = new Chien( "berger" , "Allemand");
let myAnimal2 = new Chien (" Berger", " Lion");
//document.getElementById("demo").innerHTML = myAnimal.show();   //--> censer fonctionner dans le html
console.log(myAnimal); //-> fonctionne 
console.log(myAnimal2.show());



                                        //*crée une methode (une fonction )et Rajouter dans la classe***************



   let LLivre = class LLivre {
    constructor(titre, auteur, nbrePages) {
        this.titre = titre;
        this.auteur = auteur;
        this.nbrePages = nbrePages;
        
    }

   affichage1(){                                                     //-->cree une fonction anonyme ou methode
     console.log(
    "j ai lu" +
    this.titre + 
    " de " +
        this.auteur);
    }                                        
    
    affichage2(nom){                                                     //-->cree une fonction anonyme ou methode    // je peux cree un argument dans l affichage2()
        console.log(
            "j aime " +
            this.auteur + " " + nom);
    } 

    };




let monLLivre = new LLivre( " l' alchimiste" , "paulo coelho", 285)      
console.log(monLLivre);

let monLLivre2 = new LLivre("holy Book", "unknown", 114)
console.log(monLLivre2);

let monLLivre3 = new LLivre("FROUSSARDE", "INES", 114)
console.log(monLLivre3);



monLLivre.affichage1();                                 //--> crée l affichage de la methode 1 de monLLivre
monLLivre.affichage2(" ines a la frousse");                                 //--> cree l affichage de la methode 2 de monLLivre



                                //OBJECT.setPrototypeOf()

//En revanche, les classes ne permettent pas d'étendre des objets classiques non-constructibles.
 //Si on souhaite créer un lien d'héritage en un objet et une classe, on utilisera Object.setPrototypeOf() :

const Animall = {
  crie() {
    console.log(`${this.nom} fait du bruit.`);
  }
};

class Chienn {
  constructor(nom) {
    this.nom = nom;
  }
  crie() {
    super.crie();
    console.log(`${this.nom} aboie.`);
  }
}
Object.setPrototypeOf(Chienn.prototype, Animall);

let d = new Chienn('Ida');
d.crie();
// Ida fait du bruit
// Ida aboie.


               

