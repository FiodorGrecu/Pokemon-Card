
    async function getPokemon() {
        const pokeInput = document.getElementById("pokemon").value;
        console.log(pokeInput)
        const pokeURL = "https://pokeapi.co/api/v2/pokemon/" + pokeInput;
        const pokemon = await fetch(pokeURL);
        console.log(pokemon.status);
        if (pokemon.status != 200){
          const outputDiv = document.getElementById("outputPoke");
          outputDiv.innerHTML = `<div style="text-align:center;
                                        color:red;
                                        font-size:50px;  
                                          ">
                                          Sorry I couldn't find your Pokemon!
                                  </div>`;
        }
        else {
          const pokeData = await pokemon.json();
          console.log(pokeData);
          const outputDiv = document.getElementById("outputPoke");
          outputDiv.innerHTML = `<div style="text-align:center; 
                                              color:yellow; 
                                              font-family: Redressed;
                                              font-size:90px;
                                              font-weight: 900;
                                              text-transform: capitalize
                                              ">
                                ${pokeData.name}
                                </div>`
                                
          // outputDiv.innerHTML += `<div style="text-align:center; color:white">Pokemon Id</div>`
          outputDiv.innerHTML += `<div style="text-align:center; 
                                              color:pink; 
                                              padding-bottom:40px; 
                                              font-size:36px;"> 
                                  ${pokeData.id}
                                  </div>`
      // behavior="slide" direction="up" scrollamount="100"  this is for sliding up place inside of the marquee tag
      // <marquee></marquee>
          outputDiv.innerHTML += `<img style="align-item:center;" 
                                    src=${pokeData.sprites.other.home.front_default}>`                         
                               
        };
      }
  
