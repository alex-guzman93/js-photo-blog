//seleiono elemento di conteiner output 
const outputCont = document.querySelector(".container-cards")
const overlay = document.querySelector(".overlay")
const onOff = document.querySelector(".on-off")
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
            outputCont.innerHTML += `<figure class="card">
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
            })
        })
        onOff.addEventListener("click", () => {
            overlay.style.display = "none"
        })
    })
    .catch()
