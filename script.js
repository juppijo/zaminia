document.addEventListener('DOMContentLoaded', () => {
    const artImage = document.getElementById('current-art');
    const paintBtn = document.getElementById('paint-btn');
    const statusText = document.getElementById('status-text');

    // Hier trägst du deine Dateinamen ein (müssen im Ordner 'bilder' liegen)
    const bilderListe = [
        'bilder/kunst1.jpg',
        'bilder/kunst2.jpg',
        'bilder/kunst3.jpg',
        'bilder/kunst4.jpg'
    ];
    
    let aktuellerIndex = 0;

    paintBtn.addEventListener('click', () => {
        // Index erhöhen
        aktuellerIndex = (aktuellerIndex + 1) % bilderListe.length;
        
        // Sanfter Übergang: Bild kurz ausblenden
        artImage.style.opacity = 0;

        setTimeout(() => {
            // Neues Bild laden
            artImage.src = bilderListe[aktuellerIndex];
            statusText.innerText = `Werk ${aktuellerIndex + 1} wird betrachtet...`;
            
            // Bild wieder einblenden
            artImage.style.opacity = 1;
        }, 300);
        
        console.log("Zaminia zeigt dir ein neues Werk.");
    });
});