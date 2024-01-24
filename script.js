tirartexto();
function Criptar(){
    tirarImagem();
    tirartexto();
   let pegarTexto = document.getElementById('texto').value;
   let encripitado=encriptando(pegarTexto);
   let exibirTecto=document.getElementById('resp');
    exibirTecto.innerHTML=encripitado
}
function Descriptar(){
  tirarImagem();
  tirartexto();
    let pegarTexto = document.getElementById('texto').value;
    let encrip=descripitando(pegarTexto);
    let exibirTecto=document.getElementById('resp');
    exibirTecto.innerHTML=encrip;
}
function tirarImagem() {
    let x=document.getElementById('textmens');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  } 
function tirartexto(){
   exibirTe=document.getElementById('textResp');
    if (exibirTe.style.display === 'none') {
        exibirTe.style.display = 'block';
      } else {
        exibirTe.style.display = 'none';
      }

}
    
function encriptando(pegarTexto){
    return pegarTexto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
}
function descripitando(pegarTexto){
    return pegarTexto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}
function copiarTexto(){
    let exibirTecto=document.getElementById('resp');
    navigator.clipboard.writeText(exibirTecto.value).then(() =>{
    alert('Mensagem Copiada')
  })
}
