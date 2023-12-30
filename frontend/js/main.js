window.onload = async() => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  
try {

  const response = await fetch('http://localhost:3031/api/movies')
  const {meta, data} = await response.json()
    
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    const p = document.createElement("p");
    p.textContent = `Rating: ${movie.rating}`;

    const duracion = document.createElement("p");
    duracion.textContent = `Duración: ${movie.length}`;

    const link = document.createElement("a");
    link.setAttribute("class","botonAgregar");
    link.textContent = "Ver más"
    link.setAttribute('href',`formulario.html?movie=${movie.id}`);
    

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    if (movie.genre !== null) {
      const genero = document.createElement("p");
      genero.textContent = `Genero: ${movie.genre.name}`;
      card.appendChild(genero);
    }
    card.appendChild(duracion);
    card.appendChild(link);
  });

} catch (error) {
  console.log(error);
}
   
    /*link.setAttribute("href","formulario.html?id=" + movie.id);
    a.setAttribute("class","botonAgregar");
    a.textContent = "Ver más"
    card.appendChild(a)

    const star = document.createElement('a');
    star.setAttribute('class','botonAgregar');
    star.innerHTML = '<i class="far fa-star"></i>';

    card.appendChild(star);
});

} catch (error) {
  console.error
}**/
};