const boxes = document.getElementsByClassName('boxesProp');

const isMediumScreen = window.matchMedia("(max-width: 375px)").matches;
const isSmallScreen = window.matchMedia("(max-width: 320px)").matches;
const isLargeScreen = window.matchMedia("(max-width: 430px)").matches;

const Ainsta = document.getElementById('Ainsta');
const Awhorus = document.getElementById('Awhorus');
const propJs = document.getElementById('propsJs');
const membersJs = document.getElementById('membersJs');
const faqJs = document.getElementById('faqJs');




for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        const isSmallScreen = window.matchMedia("(max-width: 320px)").matches;
        const isMediumScreen = window.matchMedia("(max-width: 375px)").matches;
        const isLargeScreen = window.matchMedia("(max-width: 430px)").matches;

        if (isSmallScreen || isMediumScreen || isLargeScreen) {
            const box1 = document.getElementById('box1');
            const box2 = document.getElementById('box2');
            const box3 = document.getElementById('box3');
            const box4 = document.getElementById('box4');

            box1.style.height = "50px";
            box2.style.height = "50px";
            box3.style.height = "50px";
            box4.style.height = "50px";

            const currentHeight = parseInt(this.style.height);

            if (currentHeight === 400 && (isLargeScreen || isMediumScreen || isSmallScreen)) {
                this.style.height = "50px";
            } else {
                this.style.height = "400px";
            }
        }

    });
}

if (isSmallScreen) {

    let fontSize = "15px"

    faqJs.style.fontSize = fontSize
    Ainsta.style.fontSize = fontSize
    Awhorus.style.fontSize = fontSize
    membersJs.style.fontSize = fontSize
    faqJs.style.fontSize = fontSize
    propJs.style.fontSize = fontSize



} else if (isMediumScreen) {
    let fontSize = "18px"

    faqJs.style.fontSize = fontSize
    Ainsta.style.fontSize = fontSize
    Awhorus.style.fontSize = fontSize
    membersJs.style.fontSize = fontSize
    faqJs.style.fontSize = fontSize
    propJs.style.fontSize = fontSize


}

else if (isLargeScreen) {
    let fontSize = "20px"

    faqJs.style.fontSize = fontSize
    Ainsta.style.fontSize = fontSize
    Awhorus.style.fontSize = fontSize
    membersJs.style.fontSize = fontSize
    faqJs.style.fontSize = fontSize
    propJs.style.fontSize = fontSize

}

if (isMediumScreen || isSmallScreen) {

    Awhorus.innerHTML = "sobre";
    Ainsta.innerHTML = "insta";

}
else {
    Ainsta.innerHTML = "instagram";
    Awhorus.innerHTML = "sobre a era";

}