/*Spoiler Alert: I shameless stole this, I will replace it once i figure out how to code it myself.*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startTime = performance.now();
(function drawRipple(timestamp) {
    const elapsedTimeUnits = (timestamp - startTime) / 50;
    const pixelData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < pixelData.data.length; i += 4) {
        let x = Math.floor(i / 4) % canvas.width;
        let y = Math.floor(i / (4 * canvas.width));
        let reIndexedX = -((canvas.width - x) - (canvas.width / 2));
        let reIndexedY = (canvas.height - y) - (canvas.height / 2);
        let radialX = Math.hypot(reIndexedX, reIndexedY);
        let waveHeight = Math.sin((radialX - elapsedTimeUnits) / 15);
        let adjustedHeight = (waveHeight * 60 + (255/2));
        pixelData.data[i]     = adjustedHeight;
        pixelData.data[i + 1] = adjustedHeight;
        pixelData.data[i + 2] = adjustedHeight;
        pixelData.data[i + 3] = 32;
    };
ctx.putImageData(pixelData, 0, 0);
requestAnimationFrame(drawRipple);
})(startTime);