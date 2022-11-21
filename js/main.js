// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe



//  1) MILESTONE 0
// Creare un array di oggetti 


const team = [

    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'foto' : 'wayne-barnett-founder-ceo.jpg'

      },

      {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : 'angela-caroll-chief-editor.jpg'

      },

      {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'foto' : 'walter-gordon-office-manager.jpg'

      },

      {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'foto' : 'angela-lopez-social-media-manager.jpg'

      },

      {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'foto' : 'scott-estrada-developer.jpg'

      },

      {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'foto' : 'barbara-ramos-graphic-designer.jpg'
      }


];


//  2) MILESTONE 1
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// Creo il ciclo for per stampare le informazioni di ogni membro del team

for ( let i = 0; i < team.length; i++){

    //  creo la variabile
    let = teamMember = team[i];

    console.log(teamMember.nome, teamMember.ruolo, teamMember.foto);

    // 3) // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    // Determino le variabil

    let container = document.getElementById('container');

    // Questa variabile deve essere creata a partire da JS, devo determinare prima il div e poi una clssse relativa

    // div
    let photo = document.createElement('div');
    // classe
    photo.classList.add('photo');

    // Devo immetterle nell'HTML
    photo.innerHTML = `${teamMember.nome} ${teamMember.ruolo} ${teamMember.foto}`

    container.append(photo);
}



