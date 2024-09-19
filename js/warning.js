var ADS_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status === 0 || xhr.responseURL !== ADS_URL) {
            var warn = document.getElementById("warning");
            warn.hidden = false;
            warn.innerText = "Внимание! Блокировщик рекламы может блокировать блоки с музыкой, если вы не видите обложки или плееры, отключите блокировщик. На этом сайте нет рекламы.";
        }
    }
};
xhr.open('HEAD', ADS_URL, true);
xhr.send(null);
