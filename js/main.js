
function resizeIframe() {
    var iframe = document.getElementById("iframePage");
    iframe.height = (iframe.contentWindow.document.body.scrollHeight+100) + 'px';
    window.scrollTo(0,0);
}




