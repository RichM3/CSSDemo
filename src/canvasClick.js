window.addEventListener('DOMContentLoaded', () => {
    
    // debugger

    // set context and id values for canvas location
    var elem = document.getElementById('myCanvas'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop,
        context = elem.getContext('2d'),
        elements = [];

    // set canvas size to size of containing element
    var canvasDiv = document.getElementById("canvasDiv");
    var width = elem.width = canvasDiv.offsetWidth;
    var height = elem.height = canvasDiv.offsetHeight;

    // debugger

    // Add event listener for `click` events.
    elem.addEventListener('click', function (event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;

            // console.log(x, y);

        elements.forEach(function (element) {
            if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
                alert('clicked an element');
                console.log(elements.length);
                elements.pop(element);
                console.log(elements.length);
            }
        });

    }, false);

    // debugger

    // Add element.
    elements.push(
        { colour: '#05EFFF', width: 20, height: 20, top: 10, left: 15 },
        { colour: '#05EFFF', width: 20, height: 20, top: 50, left: 35 },
        { colour: '#05EFFF', width: 20, height: 20, top: 100, left: 85 }
    );

    // Render elements.
    elements.forEach(function (element) {
        context.fillStyle = element.colour;
        context.fillRect(element.left, element.top, element.width, element.height);
    });
});

