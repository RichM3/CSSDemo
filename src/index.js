// let flipPage = <div>Test</div>; 

window.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('app').innerText = "Hello World!";
    // document.getElementById('app').innerHTML = (
    //     <div>"Hello World!"</div>
    //     <div>"Hello World!"</div>
    //     <div>"Hello World!"</div>
    // );
    // document.getElementById('app').innerText = flipPage;

    let divs = document.querySelectorAll(".the-deck-card")
    // .addEventListener("onclick", function () {
    //     alert("clicked");
    // });

    divs.forEach(function (div, index) {
        div.addEventListener("click", function () {
            // alert("clicked");

            // div.style.backgroundColor = "red";
            if (div.style.transform === "rotateY(180deg)") {
                div.style.transform = "";
                // console.log(div.classList);
            }
            else {
                div.style.transform = "rotateY(180deg)";
                // console.log(div.classList);
            }


            // alert(div.id);
            // // div.  transform: rotateY(180deg);
            // debugger
            // if (div.classList !== ".the-deck-front") {
            //     alert("in the if");
            //     console.log(div.classList);
            // }

            // div.classList.toggle("the-deck-back");
            // div.toggleClass('hover');
            // debugger

        });
    });

    // elements.forEach(function (element, index) {
    //     if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
    //         // alert('clicked an element');
    //         // console.log(elements.length);
    //         delete elements[index];

    //         // console.log(elements.length);
    //         context.clearRect(0, 0, width, height);
    //         writeBoxes(elements, context);
    //     }
    // });



});

// Document.querySelectorAll()

// document.getElementById("myBtn").addEventListener("click", function () {
//     document.getElementById("demo").innerHTML = "Hello World";
// });

