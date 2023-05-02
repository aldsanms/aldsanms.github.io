
function resizeIframe() {
    var iframe = document.getElementById("iframePage");
    iframe.height = (iframe.contentWindow.document.body.scrollHeight+100) + 'px';
}

function loadIframe() {
    resizeIframe();
    window.scrollTo(0,0);
}
