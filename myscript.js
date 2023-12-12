/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
		
*/


//MILESTONE 0:

//Creare l’array di oggetti con le informazioni fornite.
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
