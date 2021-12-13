function constructSlideArray() {
    const SLIDES = [];
    for (const SLIDE of document.querySelectorAll(`.slide`).values()) {
        SLIDES.push(SLIDE);
    }
    return SLIDES;
}

function getSlidesIndex() {
    let slideIndex = 0;
    for (const SLIDE of document.querySelectorAll(`.slide`).values()) {
        if (SLIDE.classList.contains(`selected`)) {
            break;
        }
        slideIndex += 1;
    }
    return slideIndex;
}

function moveSlideshow(direction) {
    const SLIDES = constructSlideArray();
    const CURR_SLIDE_INDEX = getSlidesIndex();

    const SLIDE_WIDTH = document.getElementsByClassName(`slide`)[0].offsetWidth;
    const SLIDE_CONTAINER = document.getElementById(`slides-container`);

    switch (direction) {
        case "left":
            if (CURR_SLIDE_INDEX !== 0) {
                SLIDE_CONTAINER.style.transform = `translate(-${SLIDE_WIDTH * (CURR_SLIDE_INDEX - 1)}px)`;
                SLIDES[CURR_SLIDE_INDEX].classList.remove(`selected`);
                SLIDES[CURR_SLIDE_INDEX - 1].classList.add(`selected`);
            }
            break;
        case "right":
            if (CURR_SLIDE_INDEX !== SLIDES.length - 1) {
                SLIDE_CONTAINER.style.transform = `translate(-${SLIDE_WIDTH * (CURR_SLIDE_INDEX + 1)}px)`;
                SLIDES[CURR_SLIDE_INDEX].classList.remove(`selected`);
                SLIDES[CURR_SLIDE_INDEX + 1].classList.add(`selected`);
            }
            break;
        default:
            throw new Error("Tried to move the slideshow, but no direction was specified.");
    }
}

document.addEventListener(`keydown`, (event) => {
    switch (event.code) {
        case `ArrowLeft`:
            moveSlideshow("left");
            break;
        case `ArrowRight`:
            moveSlideshow("right");
            break;
        default:
    }
});
