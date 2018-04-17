$(document).ready(function() {

  // Quand je clique sur id A
  $('#a').on('click', function () {
    // je suprime le main
    $('main').empty();
    // Je lance une requete ajax
    $.get("https://anapioficeandfire.com/api/characters/583", function(data) { // FOnction qui fait appel à deux éléments
      
      // JE definie mes variable 
      let div1= document.createElement('div');
      let div2 = document.createElement('div');
      let list = document.createElement('ul');
      list.classList.add('list-style');
      let text = document.createTextNode("THe list of surname ");

      let name = data.name; 
      div1.classList.add('color-blue');
      let gender = data.gender;
      let aliases = data.aliases;
    
      // J'ajoute mes donner au variable 
      div1.innerHTML = "The name of personnage is " + name; // inner html contenue de la div 
      div2.innerHTML = name + "is a " + gender;

      text.innerHTML = text;
      // Boucle pour parcourir mon tableau et le lier au html 
      for (let i = 0; i < aliases.length; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = aliases[i]; // je parcours ma boucle et j'ajoute un nouvelle element à chaque fois
        list.appendChild(listElement);
      };
 // SI je click sur jon snow j'obtient son allegence 
    $(div1).on('click', function(){
      $.get("https://anapioficeandfire.com/api/houses/362", function(house) {
        // SI la class dans laquel est cotenue le mot es tpleine alors je surpime le contenue de la class 
        // JE suprime se qui est afficher si je reclique 
        if ($('.element-allegent').length > 0) {
          $('.element-allegent').remove();
        };
        let nameAllengent = document.createElement('div');
        nameAllengent.innerHTML = house.name;
        $('#resultList').append(nameAllengent);
        nameAllengent.classList.add('element-allegent');     
       });

     });
     // Afficher les resultat dans le HTML
      $('#resultList').append(div1, div2, text, list)    
    });
  });


// QUAND JE CLIQUE SUR LA REQUETE B
  $('#b').on('click', function () {

        // je suprime le main
        $('main').empty();
    
    $.get("https://anapioficeandfire.com/api/houses/362", function(data) { // FOnction qui fait appel à deux éléments
      let div1= document.createElement('div');
      let div2 = document.createElement('div');
      let list = document.createElement('ul');
      list.classList.add('list-style');
      let text = document.createTextNode("The tittle");

      let name = data.name; 
      let region = data.region;
      let titles = data.titles;
    

      div1.innerHTML = "The name of house " + name; // inner html contenue de la div 
      div2.innerHTML = name + "is a " + region;


      text.innerHTML = text;

      for (let i = 0; i < titles.length; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = titles[i]; // je parcours ma boucle et j'ajoute un nouvelle element à chaque fois
        list.appendChild(listElement);
      };

      

      $('#resultList').append(div1, div2, text, list);
    });
// Crée un boutton
      var button = document.createElement("button");
      button.innerHTML = "New House ";
      $('#resultList').append(button)

// Quand je clique sur le bouton je veux générer une nouvelle maison au hasard 
      $(button).on('click', function() { 
        // SI c'est deja afficher je supprime
       
// nouvelle fonction rambon 1-500
        let id = Math.floor(Math.random() * Math.floor(450));
        // FAire une requete sur le lien fournis au hasard
        $.get("https://anapioficeandfire.com/api/houses/" + id, function(house) {
          // SUpprime les element si il y en as deja
        if ($('.remove').length > 0) {
            $('.remove').remove();
          };   


          let div1= document.createElement('div');
          div1.classList.add('remove');   
          let div2 = document.createElement('div');
          div2.classList.add('remove'); 
          let list = document.createElement('ul');
          list.classList.add('list-style');
          list.classList.add('remove'); 
          let text = document.createTextNode("The tittle"); 
    
          let name = house.name; 
          let region = house.region;
          let titles = house.titles;
        
    
          div1.innerHTML = "The name of house " + name; // inner html contenue de la div 
          div2.innerHTML = name + "is a " + region;
    
    
          text.innerHTML = text;
    
          for (let i = 0; i < titles.length; i++) {
            let listElement = document.createElement('li');
            listElement.innerHTML = titles[i]; // je parcours ma boucle et j'ajoute un nouvelle element à chaque fois
            list.appendChild(listElement);
          };
    
          
    
          $('#resultList').append(div1, div2, text, list);
        });

        

     });
  });

  $('#c').on('click', function () {
    $('main').empty();

    $.get("https://www.anapioficeandfire.com/api/books/1", function(data) { // FOnction qui fait appel à deux éléments
      let div1= document.createElement('div');
      let div2 = document.createElement('div');
      let list = document.createElement('ul');
      list.classList.add('list-style');
      let text = document.createTextNode("The characters");

      let name = data.name; 
      let numberOfPage = data.numberOfPages;
      let povCharacters = data.povCharacters;
    

      div1.innerHTML = "The name of book is " + name; // inner html contenue de la div 
      div2.innerHTML = name + " has got a " + numberOfPage + " pages ";

      text.innerHTML = text;

      for (let i = 0; i < povCharacters.length; i++) {
        let listElement = document.createElement('li');

        $.get(povCharacters[i], function(data) {
          let div3 = document.createElement('div');
          div3.innerHTML = data.name;
          $('.list-style').append (div3);
        });
      listElement.innerHTML = povCharacters[i]; // je parcours ma boucle et j'ajoute un nouvelle element à chaque fois
      };
      

      $('#resultList').append(div1, div2, text, list);




    });
    

  });

});




// Supprimer tout le contenu de la div de destination (resultList)

// mettre un event listener sur les 3 boutons

// Effectuer une premiere requete Ajax

