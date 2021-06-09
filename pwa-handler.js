const serviceWorker = navigator.serviceWorker;

if (serviceWorker) {
    serviceWorker
        .register("/service-worker.js")
        }

let beforeInstallEvent;

const installButton = document.getElementById("install");

window.onbeforeinstallprompt= (event) => {
  console.log('hg')
    event.preventDefault();
    beforeInstallEvent = event;
    installButton.style.display = "block";
};

installButton.onclick= () => {
    beforeInstallEvent
        .prompt()
        .then((choice) => {
            if (choice.outcome === "accepted") {
                installButton.style.display = "none";
            }
        });
};