let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";

let token="Bearer BQBRQctWbVFS2np1zg0JWJ-jrPurH7IBTuo7g7zDjKhgwk_GMQ0tIJqUpidhx5bohO1_nhzpI4myBwWQWwvHGkBrzx_MkkxCx55MnCdFXtw7Avz3fIL5p7tASM4Fe-u3SMUl2hl-I6r7pMGK-M_0L8VepgrbGu0";

let parametrosPeticion={
 method:"GET",
 headers:{
    Authorization:token
 }

}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);//Objeto
    pintarDatos(respuesta.tracks);
    /*console.log(respuesta.tracks);//arreglo
    console.log(respuesta.tracks[0]);//posicion del arreglo
    console.log(respuesta.tracks[0].name);
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);*/
})
.catch(function(error){
    console.log(error);
})

function pintarDatos(datos){

    let fila=document.getElementById("fila");
    datos.forEach(function(cancion){
        
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        let body=document.createElement("div");
        body.classList.add("card-body");

        let titulo=document.createElement("h3");
        titulo.classList.add("text-center");
        titulo.textContent=cancion.name;

        let popularidad=document.createElement("h6");
        popularidad.classList.add("text-center");
        popularidad.textContent=cancion.popularity;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(body)
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
        body.appendChild(titulo);
        body.appendChild(popularidad);




    })

}