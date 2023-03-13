const _nav = document.querySelector('nav');
const _html = document.querySelector('#html');
const _body = document.querySelector('#body');
const _main = document.querySelector('#main');
const _file = document.querySelector('#file');
const _header = document.querySelector('header');
const _footer = document.querySelector('footer');
const _section = document.querySelector('section');
const _fileBtn = document.querySelector('.fileInput');
const _toggleFullScreen = document.querySelector('.toggleFullScreen');
const _exitFullScreen = document.querySelector('.exitFullScreen');
const _splashScreen = document.querySelector('#splash-screen');
const _modelViewer = document.querySelector('model-viewer');
const _toggleBtn = _nav.querySelector('.toggle-btn');

// Splash Screen
setTimeout(function () {
    _main.style.display = 'block';
    _html.style.overflowX = 'hidden';
    _html.style.overflowY = 'overlay';
    _splashScreen.style.display = 'none';
}, 3000);

// File Input
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

// Model Viewer Customization
_modelViewer.addEventListener('load', () => {
    for (const material of _modelViewer.model.materials) {
        material.occlusionTexture.setTexture(null);
    }
});

// Navigation
_toggleBtn.addEventListener('click', () => {
    _nav.classList.toggle('open');
});

function toggleFullScreen() {
    document.documentElement.requestFullscreen()
    _toggleFullScreen.style.display = 'none';
    _exitFullScreen.style.display = 'flex';
    _header.style.display = 'none';
    _footer.style.display = 'none';
    _section.style.height = '100%';
    _section.style.width = '100%';
    $('.toggleFullScreen')
        .attr('style', '')
    $('.exitFullScreen')
        .attr('style', '--i:3;display:flex!important')
}

function exitFullScreen() {
    document.exitFullscreen()
    _toggleFullScreen.style.display = 'flex';
    _exitFullScreen.style.display = 'none';
    _header.style.display = 'block';
    _footer.style.display = 'block';
    _section.style.height = '85.5%';
    _section.style.width = '85.5%';
    $('.toggleFullScreen')
        .attr('style', '--i:3;display:flex!important')
    $('.exitFullScreen')
        .attr('style', '')
}

function exitNavigation() {
    _nav.classList.remove('open');
}

_fileBtn.addEventListener("click", function () {
    _file.click();
});

/*
_file.addEventListener("change", function () {
    if (_file.value) {
        customTxt.innerHTML = _file.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});
*/