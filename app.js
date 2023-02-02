var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

function adicionarFilme(){
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  
    if(( filmeFavorito.endsWith('jpg') ) || ( filmeFavorito.endsWith('jpeg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaFilmesFavoritos.push(filmeFavorito);
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
      limpaCampos();
      recarregarFilmes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} "><img src=" ${listaFilmesFavoritos[i]} "></a>`;
    
  }
}

function limpaCampos(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
}

var listaFilmesImagens = ['https://veja.abril.com.br/wp-content/uploads/2023/01/ABRE-TLOU-1.jpg.jpg?quality=70&strip=info&w=1280&h=720&crop=1', 'https://s2.glbimg.com/xf8BaeDS2dUsMgtcG5MsO-esDiI=/e.glbimg.com/og/ed/f/original/2019/12/22/zem22ba72bhpvndgnmdvkvfmve.jpg',  'https://s2.glbimg.com/TX-MM-zbGTrfIN5hEdf-8xB-RmU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/9/s/zV7l65TvqRPKYV3xGE4w/house-of-the-dragon.jpg', 'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/09/the_walking_dead_guia_futuro_serie__90ilq705-1210x544.jpg',] 
var nomeFilmes = ['The Last Of Us', 'Peaky Blinders', 'House Of The Dragon', 'The Walking Dead',]

 var i = 0
 while(i < listaFilmesImagens.length){
   document.write(`<p id="final"><img src="${listaFilmesImagens[i]}"> ${nomeFilmes[i]}</p>`);
   i++
 }