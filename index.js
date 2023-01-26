let __list = document.querySelector('#list');
let __div = __list.querySelectorAll('.play');
let __tosh = __list.querySelector('.tosh');
let __qogoz = __list.querySelector('.qogoz');
let __qaychi = __list.querySelector('.qaychi');
let __elseList = __list.querySelector('.elseList');

let render = '';
let id = '';
let classs = '';
__div.forEach((item) => {
    item.addEventListener('click', () => {
        render = Math.ceil(Math.random() * 3);
        if (item.className === 'qaychi play') {
            console.log('qaychi');
            let a = item.id
            a = render
            console.log(a);
            if (a === 2) {
                __tosh.classList = ' delete tosh play'
                let div = document.createElement("p")
                div.textContent = 'Lose'
                __elseList.append(div);
            }
            else if (a === 3) {
                __qogoz.classList = 'delete tosh play'
                let div = document.createElement("p")
                div.textContent = 'Victory'
                __elseList.append(div);
            }
            else {
                __tosh.classList = ' delete tosh play'
                __qogoz.classList = 'delete tosh play'
                __qaychi.classList = 'delete tosh play'
                let div = document.createElement("p")
                div.textContent = '🤝'
                __elseList.append(div);
            }
        }
        else if (item.className === 'qogoz play') {
            console.log('qaychi');
            let a = item.id
            a = render
            console.log(a);
            if (a === 1) {
                __tosh.classList = ' delete tosh play'
                let div = document.createElement("p")
                div.textContent = 'Lose'
                __elseList.append(div);
            }
            else if (a === 3) {
                __qaychi.classList = 'delete tosh play'
                let div = document.createElement("p")
                div.textContent = 'Victory'
                __elseList.append(div);
            }
            else {
                __tosh.classList = ' delete tosh play'
                __qaychi.classList = 'delete tosh play'
                __qogoz.classList = 'delete tosh play'
                let div = document.createElement("p")
                div.textContent = '🤝'
                __elseList.append(div);
            }
        }
        else if (item.className === 'tosh play') {
            console.log('qaychi');
            let a = item.id
            a = render
            console.log(a);
            if (a === 1) {
                __qogoz.classList = ' delete tosh play'
                let div = document.createElement("p")
                div.textContent = 'Lose'
                __elseList.append(div);
            }
            else if (a === 2) {
                __qaychi.classList = 'delete tosh play'
                let div = document.createElement("p")
                div.textContent = 'Victory'
                __elseList.append(div);
            }
            else {
                __qogoz.classList = ' delete tosh play'
                __qaychi.classList = 'delete tosh play'
                __tosh.classList = 'delete tosh play'
                let div = document.createElement("p")
                div.textContent = '🤝'
                __elseList.append(div);
            }
        }
    })
});

function reflesh() {
    window.location.reload()
}
