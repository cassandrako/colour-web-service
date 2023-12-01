document.getElementById('submitBtn').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    fetch('/generate-palette', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ color }),
    })
    .then(response => response.json())
    .then(data => {
        const paletteDiv = document.getElementById('palette');
        paletteDiv.innerHTML = '';
    

        Object.entries(data.primary).forEach(([step, color]) => {
            const colorDiv = document.createElement('div');
            colorDiv.style.width = '100px';
            colorDiv.style.height = '100px';
            colorDiv.style.backgroundColor = color;
            colorDiv.style.display = 'inline-block';
            paletteDiv.appendChild(colorDiv);
        });
    })
})
