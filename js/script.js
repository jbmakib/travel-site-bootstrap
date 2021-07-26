var option = {
    animation: true,
    delay: 2500
};

var toastHTMLElement = document.getElementById("liveToast");
var toastElement = new bootstrap.Toast(toastHTMLElement, option);

function ToastyOn() {
    toastElement.show()
}

function ToastyOff() {
    toastElement.hide()
}