var vez = 'O'
var veznome = ''
var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var resul = document.getElementById('res')
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var joga1 = document.getElementById('joga1')
var joga2 = document.getElementById('joga2')
var placar1 = document.getElementById('placar1')
var placar2 = document.getElementById('placar2')
var empate = false


function enviNome() {
    if (p1.value == '' || p2.value == '') {
        joga1.innerHTML = 'Player 1'
        joga2.innerHTML = 'Player 2'
        resul.style.display = 'none'
        tabuleiro.style.display = 'block'
        restart.style.display = 'block'
    } else {
        joga1.innerHTML = p1.value
        joga2.innerHTML = p2.value
        resul.style.display = 'none'
        tabuleiro.style.display = 'block'
        restart.style.display = 'block'
    }
}

function vezdoplayer(v) {
    if(vez == 'O') {
        vez = 'X'
    } else {
        vez = 'O'
    }

    if( v.innerHTML == '') {
        v.innerHTML = vez
    }else {
        window.alert('ERRO: Clique em um espaço vazio.')
        if(vez == 'O') {
            vez = 'X'
        } else {
            vez = 'O'
        }
    }

}

function fimdejogo() {
    // Verificar linhas
    if (
        (a1.innerHTML !== '' && a1.innerHTML === a2.innerHTML && a1.innerHTML === a3.innerHTML) ||
        (b1.innerHTML !== '' && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML) ||
        (c1.innerHTML !== '' && c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML)
    ) {
        
        if(vez == 'X' && p1.value != '') {
            veznome = p1.value
        } else if (vez == 'X' && p1.value == '') {
            veznome = 'Player 1'
        }

        if(vez == 'O' && p2.value != '') {
            veznome = p2.value
        } else if (vez == 'O' && p2.value == '') {
            veznome = 'Player 2'
        }

        resul.innerHTML = `${veznome} Venceu! 🏅`
        resul.style.display = 'grid'
        tabuleiro.style.display = 'none'
        atualizarPlacar(vez)
        return
    }

    // Verificar colunas
    if (
        (a1.innerHTML !== '' && a1.innerHTML === b1.innerHTML && a1.innerHTML === c1.innerHTML) ||
        (a2.innerHTML !== '' && a2.innerHTML === b2.innerHTML && a2.innerHTML === c2.innerHTML) ||
        (a3.innerHTML !== '' && a3.innerHTML === b3.innerHTML && a3.innerHTML === c3.innerHTML)
    ) {
        if(vez == 'X' && p1.value != '') {
            veznome = p1.value
        } else if (vez == 'X' && p1.value == '') {
            veznome = 'Player 1'
        }

        if(vez == 'O' && p2.value != '') {
            veznome = p2.value
        } else if (vez == 'O' && p2.value == '') {
            veznome = 'Player 2'
        }
        resul.innerHTML = `${veznome} Venceu! 🏅`
        resul.style.display = 'grid'
        tabuleiro.style.display = 'none'
        atualizarPlacar(vez)
    }

    // Verificar diagonais
    if (
        (a1.innerHTML !== '' && a1.innerHTML === b2.innerHTML && a1.innerHTML === c3.innerHTML) ||
        (a3.innerHTML !== '' && a3.innerHTML === b2.innerHTML && a3.innerHTML === c1.innerHTML)
    ) {
        if(vez == 'X' && p1.value != '') {
            veznome = p1.value
        } else if (vez == 'X' && p1.value == '') {
            veznome = 'Player 1'
        }

        if(vez == 'O' && p2.value != '') {
            veznome = p2.value
        } else if (vez == 'O' && p2.value == '') {
            veznome = 'Player 2'
        }
        resul.innerHTML = `${veznome} Venceu! 🏅`
        resul.style.display = 'grid'
        tabuleiro.style.display = 'none'
        atualizarPlacar(vez)
    }

    // Verificar empate
    if (
        a1.innerHTML !== '' && a2.innerHTML !== '' && a3.innerHTML !== '' &&
        b1.innerHTML !== '' && b2.innerHTML !== '' && b3.innerHTML !== '' &&
        c1.innerHTML !== '' && c2.innerHTML !== '' && c3.innerHTML !== ''
    ) {
        resul.innerHTML = 'Velha 🤝'
        resul.style.display = 'grid'
        tabuleiro.style.display = 'none'
        empate = true
    }
}

function atualizarPlacar(vencedor) {
    if (vencedor === 'X' && empate == false) {
        placar1.innerHTML = parseInt(placar1.innerHTML) + 1
    } else if (vencedor === 'O' && empate == false){
        placar2.innerHTML = parseInt(placar2.innerHTML) + 1
    }
}
                           
function recomecar() {

    a1.innerHTML = ''
    a2.innerHTML = ''
    a3.innerHTML = ''
    b1.innerHTML = ''
    b2.innerHTML = ''
    b3.innerHTML = ''
    c1.innerHTML = ''
    c2.innerHTML = ''
    c3.innerHTML = ''

    vez = 'O';
    empate = false
    resul.style.display = 'none'
    resul.innerHTML = ''
    tabuleiro.style.display = 'block'
}








