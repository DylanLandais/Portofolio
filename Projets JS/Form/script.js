
const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire

  civility == 'male' ? displayedCivility = 'M ' : displayedCivility = 'Mme ' ;

  if(newsletter) {newsletterMessage = 'Merci de vous être abonné à notre newsletter'}
  else {newsletterMessage = 'Abonnez vous vite à notre newsletter'} ;

  switch(category) {
      case 'soup' : displayedCategory = 'soupe';
      break;

      case 'main-course' : displayedCategory = 'plat';
      break;

      case 'fruit-dessert' : displayedCategory = 'fruits';
      break;

      case 'chocolate-dessert' : displayedCategory = 'chocolat';
      break;

      default : displayedCategory = 'entrée froide' ;
  }

  alert(`Bonjour ${displayedCivility} ${name}. ${newsletterMessage}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${displayedCategory}!`);
});
