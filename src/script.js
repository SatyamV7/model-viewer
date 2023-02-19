const _html = document.querySelector('#html');
const _body = document.querySelector('#body');
const _main = document.querySelector('#main');
const _splashScreen = document.querySelector('#splash-screen');
setTimeout(function () {
    _main.style.display = "block";
    _html.style.overflowX = "hidden";
    _html.style.overflowY = "overlay";
    _splashScreen.style.display = "none";
}, 3000);


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('model-viewer')
                .attr('src', e.target.result)
                .css('display', 'block');
            $('div.fileInput')
                .css('display', 'none');
        };
        reader.readAsDataURL(input.files[0]);
    }
}