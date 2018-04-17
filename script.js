$(document).ready(function() {

  $('#a').on('click', function () {

    $('main').empty();

    $.get("https://anapioficeandfire.com/api/characters/583", function(data) { // FOnction qui fait appel à deux éléments
      let div1= document.createElement('div');
      let div2 = document.createElement('div');
      let list = document.createElement('ul');
      list.classList.add('list-style');
      let text = document.createTextNode("THe list of surname ");

      let name = data.name; 
      let gender = data.gender;
      let aliases = data.aliases;
    

      div1.innerHTML = "The name of personnage is " + name; // inner html contenue de la div 
      div2.innerHTML = name + "is a " + gender;

      text.innerHTML = text;

      for (let i = 0; i < aliases.length; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = aliases[i]; // je parcours ma boucle et j'ajoute un nouvelle element à chaque fois
        list.appendChild(listElement);
      };
      
      $('#resultList').append(div1, div2, text, list);

  
      
  });
});


$('#b').on('click', function () {
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
