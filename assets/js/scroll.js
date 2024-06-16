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


// document.getElementById('scroll-spy').addEventListener('hover', function() {
//     var item = document.querySelectorAll(".item");

//     item.forEach(span => {
//         span.addEventListener('hover',function() {
//             span.forEach(i => i.classList.remove('boiden'));
//             span.classList.add('boiden');
//         });
//     })
// });



document.addEventListener("DOMContentLoaded", function() {
    const qrCode = document.getElementById("QRCode");
    const btnAddings = document.querySelectorAll(".btn-adding");

    btnAddings.forEach(btnAdding => {
        btnAdding.addEventListener("click", function(event) {
            const qrCodePosition = qrCode.getBoundingClientRect().top + window.scrollY - 100;

            window.scrollTo({
                top: qrCodePosition,
                behavior: 'smooth'
            });

            qrCode.classList.add("animate__animated", "animate__tada");

            qrCode.addEventListener('animationend', () => {
                qrCode.classList.remove("animate__animated", "animate__tada");
            }, { once: true }); 
        });
    });
});