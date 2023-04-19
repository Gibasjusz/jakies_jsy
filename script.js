let h2 = document.createElement('h2');
h2.innerHTML = 'Treść z javascript';

let ekran = document.getElementById('ekran');
ekran.appendChild(h2);
h2.setAttribute('style', 'color: lightblue;');

let img = document.createElement('img');
img.setAttribute('src', 'grub.png');
img.setAttribute('style', 'border-radius: 30px;');
img.setAttribute('id', 'grub');
ekran.appendChild(img);

let lis = document.getElementById('lis');

let h2_2 = document.createElement('h2');
h2_2.innerHTML = 'Zwierzęta domowe:';
h2_2.setAttribute('onclick', 'dziala()');
h2_2.setAttribute('id', 'tyt');
lis.appendChild(h2_2);
h2_2.setAttribute('style', 'color: lightblue;');

let ol = document.createElement('ol');
lis.appendChild(ol);
ol.setAttribute('id', 'lista');

let li = document.createElement('li');
let lista = document.getElementById('lista');
li.innerHTML = 'pies';
lista.appendChild(li);
li = document.createElement('li');
li.innerHTML = 'kot';
lista.appendChild(li);
li = document.createElement('li');
li.innerHTML = 'krokodyl';
lista.appendChild(li);

let h2_3 = document.createElement('h2');
h2_3.innerHTML = 'Tabela:';
h2_3.setAttribute('onclick', 'dziala()');
h2_3.setAttribute('id', 'tyt');
tab.appendChild(h2_3);
h2_3.setAttribute('style', 'color: lightblue;');

let table = document.createElement('table');
tab.appendChild(table);
table.setAttribute('id', 'tabela');

let tr = document.createElement('tr');
tr.setAttribute('id', 'tr1')
let tabela = document.getElementById('tabela');
tabela.appendChild(tr);

tr = document.createElement('tr');
tr.setAttribute('id', 'tr2');
tabela.appendChild(tr);

tr = document.createElement('tr');
tr.setAttribute('id', 'tr3');
tabela.appendChild(tr);

let th = document.createElement('th');
th.innerHTML = 'tyt';
let tr1 = document.getElementById('tr1');
tr1.appendChild(th);

th = document.createElement('th');
th.innerHTML = 'tyt2';
tr1.appendChild(th);

th = document.createElement('th');
th.innerHTML = 'tyt3';
tr1.appendChild(th);

th = document.createElement('th');
th.innerHTML = 'tyt4';
tr1.appendChild(th);

let td = document.createElement('td');
td.innerHTML = 'cos';
let tr2 = document.getElementById('tr2');
tr2.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos2';
tr2.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos3';
tr2.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos4';
tr2.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos1';
tr3.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos2';
tr3.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos3';
tr3.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'cos4';
tr3.appendChild(td);


function dziala() {
    console.log('działa');
    let h = document.getElementById('h');
    h.innerHTML = 'Działa';
}