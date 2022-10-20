// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
// BONUS 3:
// Aggiungere attraverso un form un membro al team

// MILESTONE 2
// creo array di oggetti
const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: '<img src="./img/wayne-barnett-founder-ceo.jpg" alt=""></img>',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: '<img src="./img/angela-caroll-chief-editor.jpg" alt="">',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Menager',
        foto: '<img src="./img/walter-gordon-office-manager.jpg" alt="">',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Menager',
        foto: '<img src="./img/angela-lopez-social-media-manager.jpg" alt="">',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: '<img src="./img/scott-estrada-developer.jpg" alt="">',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: '<img src="./img/barbara-ramos-graphic-designer.jpg" alt="">',
    }
]
// prendo il container
const container = document.querySelector('.team-container')

// creo un div card dentro il quale appendo div img e div x i 2 span testo
// per stampare i valori uso ciclo for
for(let value of teamMembers){ 
    const card = document.createElement('div');
    card.className = 'col-md-4 col-sm-12 d-flex flex-column text-center';
    const imgDiv = document.createElement('div');
    imgDiv.className = 'card-img text-center mb-3 mt-5';
    imgDiv.innerHTML = value.foto;
    card.appendChild(imgDiv);
    const divTxt = document.createElement('div');
    divTxt.className = ''
    divTxt.innerHTML = `
    <span class='fw-bold'>${value.nome}</span>   
    <br>
    <span>${value.ruolo}</span>
    `;
    card.appendChild(divTxt);
    container.appendChild(card);
}
// per dopo modif con key per poter inserire nuovo membro e provare con funzione