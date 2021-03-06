export const preloader = (function() {

    const preloader = document.getElementById('preloader');
    const preloadSvg = document.getElementById('preloader__svg');
    const preloadText = document.getElementById('preloader__text');
    const footer = document.querySelector('.footer');

    const img = document.querySelectorAll('img');
    const imageNumber = img.length;

    const strokeDasharray = 440;
    let lengthSector = strokeDasharray / (imageNumber - 1);
    let precentStep = Math.floor( 100 / (imageNumber - 1) );
    let currentSDO = lengthSector;
    let currentPrecent = precentStep;
    return {
        start() {
            if (footer !== null) {
                footer.classList.add('hidden');
            }
            // console.log(`imageNumber = ${imageNumber}`);
            // console.log(`lengthSector = ${lengthSector}`);
            // console.log(`currentSDO = ${currentSDO}`);

            //FOOTER ADAPTIVE FIX


            for (let i = 1; i < imageNumber; i++) {
                img[i].addEventListener('load', () => {
                    // console.log(`currentSDO = ${currentSDO}`);
                    preloadSvg.style.strokeDashoffset = strokeDasharray - currentSDO;
                    preloadText.innerHTML = `${currentPrecent}%`;
                    currentSDO += lengthSector;
                    currentPrecent += precentStep;
                });
            }
        },
        hide() {
            setTimeout(() => {
                if (footer !== null) {
                    footer.classList.remove('hidden');
                }
                //убрать прелоудер
                preloader.classList.remove('active');
            }, 500);
        },
    };

}());