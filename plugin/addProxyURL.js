var proxy = ".ezlibproxy1.ntu.edu.sg";
if (window.location.hostname.indexOf(proxy) == -1) {
    window.location.href = (("https:" == document.location.protocol) ? " https://" : " http://") +
        window.location.hostname + proxy + window.location.pathname + window.location.search;
}
