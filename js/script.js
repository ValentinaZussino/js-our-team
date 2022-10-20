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

// MILESTONE 1
// creo array di oggetti
const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    }
    // {}
]

// per stampare i valori in console uso ciclo for
for(let value of teamMembers){
    console.log(value.nome + value.ruolo + value.foto)
}