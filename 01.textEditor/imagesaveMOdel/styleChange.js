var editor = document.getElementById('editor');

function changeFontStyle(fontFamily) {
    editor.style.fontFamily = fontFamily;
}

function changeFontSize(fontSize) {
    editor.style.fontSize = fontSize + 'px';
}

function changeFontWeight(fontWeight) {
    editor.style.fontWeight = fontWeight;
}

function changeFontStyle(fontStyle) {
    editor.style.fontStyle = fontStyle;
}

function changeBackgroundColor(color) {
    editor.style.backgroundColor = color;
}

function save() {
    var img = document.createElement('img');
    img.src = 'data:image/svg+xml;base64,' + btoa(editor.value);
    document.body.appendChild(img);
}