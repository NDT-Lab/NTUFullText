var proxy = "ezlibproxy1.ntu.edu.sg"
var headurl = "http://ezlibproxy1.ntu.edu.sg/login?url=";
if (window.location.hostname.indexOf(proxy) == -1) {
    window.location.href = headurl + window.location.href;
}
