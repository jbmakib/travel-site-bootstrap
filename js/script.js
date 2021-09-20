const option = {
    animation: true,
    delay: 2500,
};

const toastHTMLElement = document.getElementById("liveToast");
const toastElement = new bootstrap.Toast(toastHTMLElement, option);

function ToastyOn() {
    toastElement.show();
}

function ToastyOff() {
    toastElement.hide();
}
