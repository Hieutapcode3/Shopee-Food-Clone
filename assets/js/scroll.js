document.getElementById('chedau').addEventListener('click', function() {
    document.getElementById('chedau1').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('che').addEventListener('click', function() {
    document.getElementById('che1').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('tsav').addEventListener('click', function() {
    document.getElementById('tsav1').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('combo').addEventListener('click', function() {
    document.getElementById('combo1').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const qrCode = document.getElementById("QRCode");
    const btnAddings = document.querySelectorAll(".btn-adding");
    const offset = 500; 

    btnAddings.forEach(btnAdding => {
        btnAdding.addEventListener("click", function(event) {
            const qrCodePosition = qrCode.offsetTop - offset;

            // Scroll to the QR code
            window.scrollTo({
                top: qrCodePosition,
                behavior: 'smooth'
            });

            // Add animation classes to the QR code
            qrCode.classList.add("animate__animated", "animate__tada");

            // Remove the animation classes after the animation ends
            qrCode.addEventListener('animationend', () => {
                qrCode.classList.remove("animate__animated", "animate__tada");
            }, { once: true }); 
        });
    });
});