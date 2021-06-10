const serviceWorker = navigator.serviceWorker;

if (serviceWorker) {
    serviceWorker.register("/sw.js");
}

let beforeInstallEvent;

const installButton = document.getElementById("install");

window.addEventListener('beforeinstallprompt' , (event) => {
    console.log("hg");
    event.preventDefault();
    beforeInstallEvent = event;
    installButton.removeAttribute('hidden');
})

installButton.onclick = () => {
    beforeInstallEvent.prompt().then((choice) => {
        if (choice.outcome === "accepted") {
            installButton.style.display = "none";
        }
    });
};
