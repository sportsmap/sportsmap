let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 600;
    if (offset > 600) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});
const popTable = document.querySelector('.pop-table');
document.querySelector('.pop-up').addEventListener('mouseover', function() {
    popTable.style.visivility = 'visible';
})