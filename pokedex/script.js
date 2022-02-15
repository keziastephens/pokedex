

let url = "https://pokeapi.co/api/v2/pokemon";

// ajax function
$.ajax({
    type:"GET",
    url:url,

    success:function(data){
        console.log(data);


        console.log(data.results[0].url);
        let bulbasaur = data.results[0].url;
        $.ajax({
            type:"GET",
            url:bulbasaur,

            success:function(pokemon){
                console.log(pokemon);
                cardDisplay();
                console.log(pokemon.name)

                console.log(pokemon.sprites.front_default)





                function cardDisplay(){
                    let i = 0;
                    for(i=0; i<pokemon.types.length; i++){
                    console.log(pokemon.types[i].type.name)
                    let typeName = pokemon.types[i].type.name;
                    $("#cardContent").append(
                        `${typeName}`
                    )
                    }                    
                    $("#cardContent").append(
                        `<div class="card" style="width: 18rem;">
                        <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h3 class="card-header"> ${pokemon.name} </h3>
                        <br>
                        <p class="card-text">ID: ${pokemon.id}</p>
                        <p class="card-text">Type: ${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}</p>
                        <p class="card-text">Abilities:  ${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</p>
                        </div>
                        </div>`
                    );

            
                }




            }
            
        });
        // card function


    }
    
});


