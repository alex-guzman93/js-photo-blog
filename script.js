//seleiono elemento di conteiner output 
const outputCont = document.querySelector(".container-cards")
const overlay = document.querySelector(".overlay")
// console.log(outputCont);

// creo riferimento endpoint
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

//creo la chiamata ajax all'endpoint

axios.get(endpoint)
    .then(response => {

        const dataArray = response.data
        // console.log(dataArray);

        dataArray.forEach(dataCard => {
            // console.log(dataCard);

            //aggiungiamo una card per ogni forEach loop
            outputCont.innerHTML += `<figure imgId=${dataCard.id} class="card">
        <img class="pin" src="./img/pin.svg" alt="#">
        <img src=${dataCard.url} class="imgs" alt="#">
        <figcaption> ${dataCard.title}</figcaption>
        </figure>`

        });
        const figures = document.querySelectorAll(".card")
        console.log(figures);
        figures.forEach(figure => {
            figure.addEventListener("click", () => {
                // console.log(figure);
                overlay.style.display = "flex"
                const cardId = figure.getAttribute("imgId")
                const url = dataArray.find(o => o.id == cardId).url
                console.log(url);
                overlay.innerHTML = `<div class="container-overlay">            
            <button class="on-off">chiudi</button>
            <img src=${url} class="img-overlay" alt="#">
            </div>`
            const onOff = document.querySelector(".on-off")
            onOff.addEventListener("click", () => {
                overlay.style.display = "none"
            })

            })

        })
    })
    .catch()
