const questionHeaders = document.querySelectorAll('[question-header]');

questionHeaders.forEach( (element) => {
    element.addEventListener('click', () => {
        manipulateAnswer(element);
        fullWidthSizing(); //calling this function to adjust the width whenever the side scrollbar appears
    });
});

function manipulateAnswer(questionHeader) {
    const questionBlock = questionHeader.parentNode;
    const paragraph = questionBlock.querySelector('[answer]');
    const question = questionBlock.querySelector('[question]');
    const arrow = questionBlock.querySelector('[arrow]');

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
