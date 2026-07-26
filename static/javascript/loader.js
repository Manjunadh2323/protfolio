window.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    console.log("Loader:", loader);


    if(loader){

        loader.classList.remove("hide");


        setTimeout(() => {

            loader.classList.add("hide");

        }, 5000);

    }

});