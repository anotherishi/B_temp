const serviceWorker = navigator.serviceWorker;

if (serviceWorker) {
    serviceWorker.register("/service-worker.js");
    let beforeInstallEvent;
    const installButton = document.getElementById("install"), 
    dl = document.getElementById("dl-info");

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        beforeInstallEvent = event;
        installButton.removeAttribute("hidden");
        dl.removeAttribute("hidden");
        document.body.onload = () => {
            setTimeout(() => {
                document.onclick = () => {
                    dl.style.animation = "fadeout 2s linear forwards";
                    dl.onanimationend = () => {
                        destroy(dl);
                    };
                };
            }, 10000);
        };
    });

    installButton.onclick = () => {
        beforeInstallEvent.prompt().then((choice) => {
            if (choice.outcome === "accepted") {
                destroy(installButton)
                destroy(dl)
            }
        });
    };
}
