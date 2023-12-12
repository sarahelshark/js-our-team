/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede


		
*/


//Creare l’array di oggetti con le informazioni fornite.
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
const posts = [
    {
        title:'Wayne Barnett' ,
        role: 'Founder & CEO',
        image:"./img/wayne-barnett-founder-ceo.jpg"
    } ,
    {
        title:'Angela Caroll' ,
        role: 'Chief Editor',
        image:"./img/angela-caroll-chief-editor.jpg"
    } ,
    {
        title:'Walter Gordon' ,
        role: 'Office Manager',
        image:"./img/walter-gordon-office-manager.jpg"
    } ,
    {
        title:'Angela Lopez' ,
        role: 'Social Media Manager',
        image:"./img/angela-lopez-social-media-manager.jpg"
    } ,
    {
        title:'Scott Estrada' ,
        role: 'Developer',
        image:"./img/scott-estrada-developer.jpg"
    } ,
    {
        title:'Barbara Ramos' ,
        role: 'Graphic Designer',
        image:"./img/barbara-ramos-graphic-designer.jpg"
    } 

]

console.log(posts);


//seleziono luogo dove stampero i miei post e racchiudo in costante
const postsRowEl = document.querySelector('.posts .row');


for(let i = 0; i < posts.length; i++ ){
    const post = posts[i];
    //console.log(post); funziona, inserisco markup
    const postMarkup = `
    <div class="col">
     <div class="card">
            <img class="card-img-top" src="${post.image}" alt="">

            <div class="card-body">
              <h3> ${post.title} </h3>
              <p>${post.role}</p>  
            </div>
     </div>
    </div>
    `
     //< in questo caso uso template literal `` invece che .crerateElement, che sarebbe troppo laborioso in quanto concatenazione dopo concatenazione ci vorrebbe tanto tempo, dopo aver creato il markup, posso appenderlo alla row

     postsRowEl.insertAdjacentHTML('beforeend', postMarkup);
     //nn posso usare .insertAdjacentElement, .appendChild xk questo e un template literal
     //beforeend vuol dire 'inserisci tutto prima di chiudere il tag', e dopo segno cosa devo aggiungere in questo caso il mio template literal con gli elementi di posts
}