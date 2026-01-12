//seleiono elemento di conteiner output 
const outputCont = document.querySelector(".container-cards")
    // console.log(outputCont);

// creo riferimento endpoint
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

//creo la chiamata ajax all'endpoint

axios.get(endpoint)
.then(response => {
    
    const dataArray = response.data
     console.log(dataArray);
    
     dataArray.forEach(dataCard => {
        console.log(dataCard);

        //aggiungiamo una card per ogni forEach loop
        outputCont.innerHTML +=`<figure class="card">
                <img src=${dataCard.url} class="imgs" alt="#">
                <figcaption> ${dataCard.title}</figcaption>
                
            </figure>`
     });
})

.catch()
           