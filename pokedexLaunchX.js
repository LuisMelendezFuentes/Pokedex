const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  
  
  //fetch hace una consulta al servidor con el url que se declaron el la constante url
  
  fetch(url).then((res)=> {   //Se declara la promesa then para recibir una función con la repuesta
      if(res.status !="200"){
        console.log(res);
        pokeImage("./pokemon-sad.gif");
      }
      else{
        return res.json(); //regresas este json
      }
      
  }).then((data) => { // regresas la data
      let pokeImg = data.sprites.front_default;
      console.log(pokeImg);
      pokeImage(pokeImg);

    })
}

//fetchPokemon(); se manda a llamar para que se ejecute en el codigo

const pokeImage = (url) =>{
  const pokeImg = document.getElementById("pokeImg");//leee el documento de html y busca el id
  pokeImg.src = url;
}


//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");




