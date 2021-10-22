var btnAdd = document.getElementById('btnAjouter');
var btnReset = document.getElementById('btnEffacer');
var inputIntitule = document.getElementById('intitule');
var inputSomme = document.getElementById('somme');
var olList = document.getElementById('list-dep');
var total = document.getElementById('total');
var filter = document.getElementById('filter');

var tabDepense = [];
var sommeTotale = 0;

filter.addEventListener('keyup', () => {
    let filterValue = Number(filter.value);

    for (let i = 0; i < olList.children.length; i++) {
        console.log(olList.children[i]);
        if (filterValue <= tabDepense[i]['somme'])
            olList.children[i].style.backgroundColor = 'pink';
        else
            olList.children[i].style.backgroundColor = 'whitew';
    }

})

function clear() {
    inputIntitule.value = '';
    inputSomme.value = '';
}

btnReset.addEventListener('click', clear);
btnAdd.addEventListener('click', () => {
    let i = inputIntitule.value;
    let s = inputSomme.value;
    console.log(i, s);
    console.log(i.trim().length);

    if (i.trim().length == 0 || s.trim().length == 0) {

        alert('Vous devez saisir les 2 données !')
        return;
    }

    tabDepense.push({
        intitule: i,
        somme: s
    })

    console.log(tabDepense);

    let newLi = document.createElement('li');
    newLi.className = "list-group-item";
    newLi.textContent = `${i} : ${s} TND`;
    olList.appendChild(newLi);

    sommeTotale += +s;

    total.textContent = sommeTotale;

    //clear();

})