var gal = ['', 0, 0, 0, 0]
var thi = ['', 0, 0, 0, 0] 
// thi[0]= nome; thi[1] vitorias; thi[2]empates; thi[3]derrotas; thi[4]pontos
var p3 = ['', 0, 0, 0, 0] 
var p4 = ['', 0, 0, 0, 0] 
var p5 = ['', 0, 0, 0, 0] 
var p6 = ['', 0, 0, 0, 0] 
var p7 = ['', 0, 0, 0, 0] 
var p8 = ['', 0, 0, 0, 0] 
var p9 = ['', 0, 0, 0, 0] 
var p10 = ['', 0, 0, 0, 0] 
let nome = []
  var tab = document.getElementById('tabelaJogadores')
  exibir()
  function exibir() {
    tab.innerHTML =  `<tr>
        <td>${gal[0]}</td>
        <td>${gal[1]}</td>
        <td>${gal[2]}</td>
        <td>${gal[3]}</td>
        <td>${gal[4]}</td>
        <td><button onClick="adicionarVitoria(gal)">Vitória</button></td>
        <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
        <td><button onClick="adicionarDerrota(gal)">Derrota</button></td>
      </tr>`
      if (nome.length >= 2) {
      tab.innerHTML += `<tr>
          <td>${thi[0]}</td>
          <td>${thi[1]}</td>
          <td>${thi[2]}</td>
          <td>${thi[3]}</td>
          <td>${thi[4]}</td>
          <td><button onClick="adicionarVitoria(thi)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(thi)">Derrota</button></td>
        </tr>` 
       } if (nome.length >= 3) {
        tab.innerHTML += `<tr>
          <td>${p3[0]}</td>
          <td>${p3[1]}</td>
          <td>${p3[2]}</td>
          <td>${p3[3]}</td>
          <td>${p3[4]}</td>
          <td><button onClick="adicionarVitoria(p3)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p3)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 4) {
        tab.innerHTML += `<tr>
          <td>${p4[0]}</td>
          <td>${p4[1]}</td>
          <td>${p4[2]}</td>
          <td>${p4[3]}</td>
          <td>${p4[4]}</td>
          <td><button onClick="adicionarVitoria(p4)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p4)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 5) {
        tab.innerHTML += `<tr>
          <td>${p5[0]}</td>
          <td>${p5[1]}</td>
          <td>${p5[2]}</td>
          <td>${p5[3]}</td>
          <td>${p5[4]}</td>
          <td><button onClick="adicionarVitoria(p5)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p5)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 6) {
        tab.innerHTML += `<tr>
          <td>${p6[0]}</td>
          <td>${p6[1]}</td>
          <td>${p6[2]}</td>
          <td>${p6[3]}</td>
          <td>${p6[4]}</td>
          <td><button onClick="adicionarVitoria(p6)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p6)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 7) {
        tab.innerHTML += `<tr>
          <td>${p7[0]}</td>
          <td>${p7[1]}</td>
          <td>${p7[2]}</td>
          <td>${p7[3]}</td>
          <td>${p7[4]}</td>
          <td><button onClick="adicionarVitoria(p7)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p7)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 8) {
        tab.innerHTML += `<tr>
          <td>${p8[0]}</td>
          <td>${p8[1]}</td>
          <td>${p8[2]}</td>
          <td>${p8[3]}</td>
          <td>${p8[4]}</td>
          <td><button onClick="adicionarVitoria(p8)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p8)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 9) {
        tab.innerHTML += `<tr>
          <td>${p9[0]}</td>
          <td>${p9[1]}</td>
          <td>${p9[2]}</td>
          <td>${p9[3]}</td>
          <td>${p9[4]}</td>
          <td><button onClick="adicionarVitoria(p9)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p9)">Derrota</button></td>
        </tr>`
       } if (nome.length >= 10) {
        tab.innerHTML += `<tr>
          <td>${p10[0]}</td>
          <td>${p10[1]}</td>
          <td>${p10[2]}</td>
          <td>${p10[3]}</td>
          <td>${p10[4]}</td>
          <td><button onClick="adicionarVitoria(p10)">Vitória</button></td>
          <td><button onClick="adicionarEmpate()" id="emp" name="emp">Empate</button></td>
          <td><button onClick="adicionarDerrota(p10)">Derrota</button></td>
        </tr>`
       } 
  } 
  function adicionarVitoria(jogador) {
    jogador[1]++
    jogador[4] += 3
    exibir()
  }
  function adicionarEmpate() {
    gal[2]++
    gal[4]++
    thi[2]++
    thi[4]++
    p3[2]++
    p3[4]++
    p4[2]++
    p4[4]++
    p5[2]++
    p5[4]++
    p6[2]++
    p6[4]++
    p7[2]++
    p7[4]++
    p8[2]++
    p8[4]++
    p9[2]++
    p9[4]++
    p10[2]++
    p10[4]++
    exibir()
  }
  function adicionarDerrota(jogador) {
    jogador[3]++
    exibir() 
  }
  function add() { 
    nome.push(String(document.getElementById('nomep').value))
   gal[0] = nome[0]
   thi[0] = nome[1]
   p3[0] = nome[2]
   p4[0] = nome[3]
   p5[0] = nome[4]
   p6[0] = nome[5]
   p7[0] = nome[6]
   p8[0] = nome[7] 
   p9[0] = nome[8]
   p10[0] = nome[9]
   exibir()
  } 
function reload() {
window.location.reload(true)
}



