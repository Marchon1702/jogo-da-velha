var vez = 'O'
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
if(a1.innerHTML == 'X' 
    && b2.innerHTML == 'X' 
    && c3.innerHTML == 'X') {   
        tabuleiro.style.display = 'none'
        resul.style.display = 'grid'
        resul.innerHTML = 'Jogador X venceu! 🥇'
    } else if (a3.innerHTML == 'X' &&
               b2.innerHTML == 'X' &&
               c1.innerHTML == 'X') {
                 tabuleiro.style.display = 'none'
                 resul.style.display = 'grid'
                 resul.innerHTML = 'Jogador X venceu! 🥇'
               } else if (a1.innerHTML == 'X' &&
                          b1.innerHTML == 'X' &&
                          c1.innerHTML == 'X') {
                            tabuleiro.style.display = 'none'
                            resul.style.display = 'grid'
                            resul.innerHTML = 'Jogador X venceu! 🥇'
                          } else if (a2.innerHTML == 'X' &&
                                     b2.innerHTML == 'X' &&
                                     c2.innerHTML == 'X') {
                                        tabuleiro.style.display = 'none'
                                        resul.style.display = 'grid'
                                        resul.innerHTML = 'Jogador X venceu! 🥇'
                            } else if (a3.innerHTML == 'X' &&
                                     b3.innerHTML == 'X' &&
                                     c3.innerHTML == 'X') {
                                        tabuleiro.style.display = 'none'
                                        resul.style.display = 'grid'
                                        resul.innerHTML = 'Jogador X venceu! 🥇'
                                } else if (a1.innerHTML == 'X' &&
                                           a2.innerHTML == 'X' &&
                                           a3.innerHTML == 'X') {
                                            tabuleiro.style.display = 'none'
                                            resul.style.display = 'grid'
                                            resul.innerHTML = 'Jogador X venceu! 🥇'
                                    } else if (a1.innerHTML == 'X' &&
                                               a2.innerHTML == 'X' &&
                                               a3.innerHTML == 'X') {
                                                tabuleiro.style.display = 'none'
                                                resul.style.display = 'grid'
                                                resul.innerHTML = 'Jogador X venceu! 🥇'
                                        } else if (b1.innerHTML == 'X' &&
                                                b2.innerHTML == 'X' &&
                                                b3.innerHTML == 'X') {
                                                 tabuleiro.style.display = 'none'
                                                 resul.style.display = 'grid'
                                                 resul.innerHTML = 'Jogador X venceu! 🥇'
                                            } else if (c1.innerHTML == 'X' &&
                                                      c2.innerHTML == 'X' &&
                                                      c3.innerHTML == 'X') {
                                                        tabuleiro.style.display = 'none'
                                                        resul.style.display = 'grid'
                                                        resul.innerHTML = 'Jogador X venceu! 🥇'
                                                        } 
if(a1.innerHTML == 'O' 
&& b2.innerHTML == 'O' 
&& c3.innerHTML == 'O') {   
    tabuleiro.style.display = 'none'
    resul.style.display = 'grid'
    resul.innerHTML = 'Jogador O venceu! 🥇'
    } else if (a3.innerHTML == 'O' &&
                b2.innerHTML == 'O' &&
                c1.innerHTML == 'O') {
                    tabuleiro.style.display = 'none'
                    resul.style.display = 'grid'
                    resul.innerHTML = 'Jogador O venceu! 🥇'
                    } else if (a1.innerHTML == 'O' &&
                              b1.innerHTML == 'O' &&
                              c1.innerHTML == 'O') {
                                    tabuleiro.style.display = 'none'
                                    resul.style.display = 'grid'
                                    resul.innerHTML = 'Jogador O venceu! 🥇'
                                    } else if (a2.innerHTML == 'O' &&
                                               b2.innerHTML == 'O' &&
                                               c2.innerHTML == 'O') {
                                               tabuleiro.style.display = 'none'
                                                resul.style.display = 'grid'
                                                resul.innerHTML = 'Jogador O venceu! 🥇'
                                                } else if (a3.innerHTML == 'O' &&
                                                            b3.innerHTML == 'O' &&
                                                            c3.innerHTML == 'O') {
                                                                tabuleiro.style.display = 'none'
                                                                resul.style.display = 'grid'
                                                                resul.innerHTML = 'Jogador O venceu! 🥇'
                                                                } else if (a1.innerHTML == 'O' &&
                                                                            a2.innerHTML == 'O' &&
                                                                            a3.innerHTML == 'O') {
                                                                                tabuleiro.style.display = 'none'
                                                                                resul.style.display = 'grid'
                                                                                resul.innerHTML = 'Jogador O venceu! 🥇'
                                                                                } else if (a1.innerHTML == 'O' &&
                                                                                            a2.innerHTML == 'O' &&
                                                                                            a3.innerHTML == 'O') {
                                                                                                tabuleiro.style.display = 'none'
                                                                                                resul.style.display = 'grid'
                                                                                                resul.innerHTML = 'Jogador O venceu! 🥇'
                                                                                            } else if (b1.innerHTML ==      'X' &&
                                                                                                    b2.innerHTML == 'O' &&
                                                                                                    b3.innerHTML == 'O') {
                                                                                                     tabuleiro.style.display = 'none'
                                                                                                     resul.style.display = 'grid'
                                                                                                     resul.innerHTML = 'Jogador O venceu! 🥇'
                                                                                                } else if (c1.innerHTML == 'X' &&
                                                                                                          c2.innerHTML == 'O' &&
                                                                                                          c3.innerHTML == 'O') {
                                                                                                            tabuleiro.style.display = 'none'
                                                                                                            resul.style.display = 'grid'
                                                                                                            resul.innerHTML = 'Jogador O venceu! 🥇'
                                                                                                            } 

}

function recomecar() {

    a1.innerHTML = '';
    a2.innerHTML = '';
    a3.innerHTML = '';
    b1.innerHTML = '';
    b2.innerHTML = '';
    b3.innerHTML = '';
    c1.innerHTML = '';
    c2.innerHTML = '';
    c3.innerHTML = '';

    vez = 'O';
    resul.style.display = 'none';
    resul.innerHTML = '';
    tabuleiro.style.display = 'block'
}








