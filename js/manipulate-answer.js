const arrows = document.querySelectorAll('[arrow]');

arrows.forEach( (element) => {
    element.addEventListener('click', () => {
        manipulateAnswer(element);
        fullWidthSizing();
    });
});

function manipulateAnswer(arrow) {
    const questionBlock = arrow.parentNode.parentNode;
    const paragraph = questionBlock.querySelector('[answer]');
    const question = questionBlock.querySelector('[question]');

    if (paragraph.style.display == "") {
        paragraph.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
        question.style.fontWeight = "var(--fw-bold)";
    } else if (paragraph.style.display == "block") {
        paragraph.style.display = "";
        arrow.style.transform = "rotate(0deg)";
        question.style.fontWeight = "var(--fw-normal)";
    }
}
