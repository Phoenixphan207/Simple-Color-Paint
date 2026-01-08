document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    let currentColor = 'red';
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 6;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    const colors = document.querySelectorAll('.color');
    colors.forEach(colorDiv => {
        colorDiv.addEventListener('click', () => {
            currentColor = colorDiv.getAttribute('data-color');
            ctx.strokeStyle = currentColor;

            colors.forEach(c => c.classList.remove('active'));
            colorDiv.classList.add('active');
        });
    });

    document.querySelector('.color[data-color="red"]').classList.add('active');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        isDrawing = false;
    });
});