const _nav = document.querySelector('nav');
const _html = document.querySelector('html');
const _body = document.querySelector('body');
const _root = document.querySelector('#root');
const _main = document.querySelector('#main');
const _file = document.querySelector('#file');
const _header = document.querySelector('header');
const _footer = document.querySelector('footer');
const _section = document.querySelector('section');
const selectTag = document.querySelector('select');
const _fileBtn = document.querySelector('#fileInput');
const _exposureRange = document.querySelector('#exposure');
const _fileCustom = document.querySelector('.file-custom');
const _toggleFullScreen = document.querySelector('.toggleFullScreen');
const _toggleBtn = document.querySelector('.navigationToggleButtons');
const _exitFullScreen = document.querySelector('.exitFullScreen');
const _splashScreen = document.querySelector('#splash-screen');
const _modelViewer = document.querySelector('model-viewer');
var _exposureValue = $('input#exposure').val();
var _exposureRealValue = _exposureValue / 10;

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
    _body.style.padding = '0px';
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
    _body.style.padding = '15px';
    _header.style.display = 'block';
    _footer.style.display = 'block';
    _section.style.height = '85.5%';
    _section.style.width = '85.5%';
    $('.toggleFullScreen')
        .attr('style', '--i:3;display:flex!important')
    $('.exitFullScreen')
        .attr('style', '')
}
function ExposureValSet() {
    $('model-viewer')
        .attr('exposure', _exposureRealValue)
    setTimeout(ExposureValSet, 1);
}

ExposureValSet();

function exitNavigation() {
    _nav.classList.remove('open');
}

_fileBtn.addEventListener('click', function () {
    _file.click();
});

function openSettings() {
    _body.style.padding = '0px';
    document.querySelector('#settings').style.display = 'flex'
}

function closeSettings() {
    _body.style.padding = '15px';
    document.querySelector('#settings').style.display = 'none'
}

function openSettingsTab(evt, settingsPanel) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '');
    }
    document.getElementById(settingsPanel).style.display = 'block';
    evt.currentTarget.className += 'active';
}

document.getElementById('defaultOpen').click();

selectTag.innerHTML = `<option value="am-ET">Amharic</option>
<option value="ar-SA">Arabic</option>
<option value="be-BY">Bielarus</option>
<option value="bem-ZM">Bemba</option>
<option value="bi-VU">Bislama</option>
<option value="bjs-BB">Bajan</option>
<option value="bn-IN">Bengali</option>
<option value="bo-CN">Tibetan</option>
<option value="br-FR">Breton</option>
<option value="bs-BA">Bosnian</option>
<option value="ca-ES">Catalan</option>
<option value="cop-EG">Coptic</option>
<option value="cs-CZ">Czech</option>
<option value="cy-GB">Welsh</option>
<option value="da-DK">Danish</option>
<option value="dz-BT">Dzongkha</option>
<option value="de-DE">German</option>
<option value="dv-MV">Maldivian</option>
<option value="el-GR">Greek</option>
<option selected value="en-GB">English</option>
<option value="es-ES">Spanish</option>
<option value="et-EE">Estonian</option>
<option value="eu-ES">Basque</option>
<option value="fa-IR">Persian</option>
<option value="fi-FI">Finnish</option>
<option value="fn-FNG">Fanagalo</option>
<option value="fo-FO">Faroese</option>
<option value="fr-FR">French</option>
<option value="gl-ES">Galician</option>
<option value="gu-IN">Gujarati</option>
<option value="ha-NE">Hausa</option>
<option value="he-IL">Hebrew</option>
<option value="hi-IN">Hindi</option>
<option value="hr-HR">Croatian</option>
<option value="hu-HU">Hungarian</option>
<option value="id-ID">Indonesian</option>
<option value="is-IS">Icelandic</option>
<option value="it-IT">Italian</option>
<option value="ja-JP">Japanese</option>
<option value="kk-KZ">Kazakh</option>
<option value="km-KM">Khmer</option>
<option value="kn-IN">Kannada</option>
<option value="ko-KR">Korean</option>
<option value="ku-TR">Kurdish</option>
<option value="ky-KG">Kyrgyz</option>
<option value="la-VA">Latin</option>
<option value="lo-LA">Lao</option>
<option value="lv-LV">Latvian</option>
<option value="men-SL">Mende</option>
<option value="mg-MG">Malagasy</option>
<option value="mi-NZ">Maori</option>
<option value="ms-MY">Malay</option>
<option value="mt-MT">Maltese</option>
<option value="my-MM">Burmese</option>
<option value="ne-NP">Nepali</option>
<option value="niu-NU">Niuean</option>
<option value="nl-NL">Dutch</option>
<option value="no-NO">Norwegian</option>
<option value="ny-MW">Nyanja</option>
<option value="ur-PK">Pakistani</option>
<option value="pau-PW">Palauan</option>
<option value="pa-IN">Panjabi</option>
<option value="ps-PK">Pashto</option>
<option value="pis-SB">Pijin</option>
<option value="pl-PL">Polish</option>
<option value="pt-PT">Portuguese</option>
<option value="rn-BI">Kirundi</option>
<option value="ro-RO">Romanian</option>
<option value="ru-RU">Russian</option>
<option value="sg-CF">Sango</option>
<option value="si-LK">Sinhala</option>
<option value="sk-SK">Slovak</option>
<option value="sm-WS">Samoan</option>
<option value="sn-ZW">Shona</option>
<option value="so-SO">Somali</option>
<option value="sq-AL">Albanian</option>
<option value="sr-RS">Serbian</option>
<option value="sv-SE">Swedish</option>
<option value="sw-SZ">Swahili</option>
<option value="ta-LK">Tamil</option>
<option value="te-IN">Telugu</option>
<option value="tet-TL">Tetum</option>
<option value="tg-TJ">Tajik</option>
<option value="th-TH">Thai</option>
<option value="ti-TI">Tigrinya</option>
<option value="tk-TM">Turkmen</option>
<option value="tl-PH">Tagalog</option>
<option value="tn-BW">Tswana</option>
<option value="to-TO">Tongan</option>
<option value="tr-TR">Turkish</option>
<option value="uk-UA">Ukrainian</option>
<option value="uz-UZ">Uzbek</option>
<option value="vi-VN">Vietnamese</option>
<option value="wo-SN">Wolof</option>
<option value="xh-ZA">Xhosa</option>
<option value="yi-YD">Yiddish</option>
<option value="zu-ZA">Zulu</option>`

/*
// Disable DevTools
!function () {
    function detectDevTools(allow) {
        if (isNaN(+allow)) allow = 100;
        var start = +new Date();
        debugger;
        var end = +new Date();
        if (isNaN(start) || isNaN(end) || end - start > allow) {
            alert('DevTools detected. All operations are terminated.');
            _main.remove
            _root.innerHTML = `<div>DevTools detected. All operations are terminated.</div>`;
        }
    }
    if (window.attachEvent) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            detectDevTools();
            window.attachEvent('onresize', detectDevTools);
            window.attachEvent('onmousemove', detectDevTools);
            window.attachEvent('onfocus', detectDevTools);
            window.attachEvent('onblur', detectDevTools);
        } else {
            setTimeout(argument.callee, 0);
        }
    } else {
        window.addEventListener('load', detectDevTools);
        window.addEventListener('resize', detectDevTools);
        window.addEventListener('mousemove', detectDevTools);
        window.addEventListener('focus', detectDevTools);
        window.addEventListener('blur', detectDevTools);
    }
}();

// KeyBoard Events
const addEvent = document.addEventListener ? function (target, type, action) {
    if (target) {
        target.addEventListener(type, action, false);
    }
} : function (target, type, action) {
    if (target) {
        target.attachEvent('on' + type, action, false);
    }
}

function disableKey() {
    _main.remove;
    _root.innerHTML = `<div>DevTools detected. All operations are terminated.</div>`;
    alert('This key is disabled.');

}
/*
// F11 Key
addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 122) {
        document.documentElement.requestFullscreen()
        toggleFullScreen();
    }
});

// F12 Key
addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 123) {
        disableKey();
        console.warn('F12 Key is disabled.');
    }
});

// Alphabet Key I
addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 73) {
        disableKey();
        console.warn('Alphabet Key I Key is disabled.');
    }
});
*/