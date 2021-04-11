
export default function DownloadButton() {
    return (
        window.addEventListener('beforeinstallprompt', (e) => {
            let deferredPrompt;
            e.preventDefault();
            deferredPrompt = e;
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
            });
        })
    )
}

