

const button = document.getElementById('changeColor');

button.onclick = function (event) {
    if (document.body.style.backgroundColor === 'blue') {
        document.body.style.backgroundColor = 'red'
    } else {
        document.body.style.backgroundColor = 'blue'

    }

}