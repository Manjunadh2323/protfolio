document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const heroBg = document.querySelector(".hero-bg");
    const heroLight = document.querySelector(".hero-light");


    console.log("Hero:", hero);
    console.log("Hero BG:", heroBg);



    if (hero && heroBg) {


        hero.addEventListener("mousemove", (e) => {

            console.log("mouse moving");

            const x =
                (e.clientX / window.innerWidth - 0.5) * 10;


            const y =
                (e.clientY / window.innerHeight - 0.5) * 10;

             heroBg.style.transform =
`
translate(${x}px, ${y}px) scale(1.06)
`;
  

            console.log(x, y);



            if (heroLight) {

                heroLight.style.transform =
                    `
                translate(${x * 0.4}px, ${y * 0.4}px)
                `;

            }


        });



        hero.addEventListener("mouseleave", () => {


            heroBg.style.transform =
                `
translate(0px,0px) scale(1.05)
`;


            if (heroLight) {

                heroLight.style.transform =
                    `
                translate(0px,0px)
                `;

            }


        });


    }


});