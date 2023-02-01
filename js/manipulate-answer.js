const arrows = document.querySelectorAll('.question-arrow');

arrows.forEach( (element) => {
    element.addEventListener('click', () => {
        manipulateAnswer(element);
        fullWidthSizing();
    });
});

function manipulateAnswer(arrow) {
    const questionBlock = arrow.parentNode.parentNode;
    const paragraph = questionBlock.querySelector('.question-answer');
    const subtitle = questionBlock.querySelector('.question-title');

    if (paragraph.style.display == "") {
        paragraph.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
        subtitle.style.fontWeight = "var(--fw-bold)";
    } else if (paragraph.style.display == "block") {
        paragraph.style.display = "";
        arrow.style.transform = "rotate(0deg)";
        subtitle.style.fontWeight = "var(--fw-normal)";
    }
}
