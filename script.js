const track = document.getElementById('track');
const thumb = document.getElementById('thumb');
const thumbValue = document.getElementById('thumbValue');
let isDragging = false;

function updateSlider(clientX) {
    const trackRect = track.getBoundingClientRect();
    let offsetX = clientX - trackRect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > trackRect.width) offsetX = trackRect.width;
    const percent = offsetX / trackRect.width;
    const value = Math.round(percent * 100);
    thumb.style.left = `${percent * 100}%`;
    thumbValue.textContent = value;
}
thumb.addEventListener('mousedown', (event) => {
    isDragging = true;
    event.preventDefault(); 
});
document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    updateSlider(event.clientX);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
track.addEventListener('click', (event) => {
    if (event.target === thumb || event.target === thumbValue) return;
    
    updateSlider(event.clientX);
});