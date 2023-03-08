function saveAsImage() {
    html2canvas(document.querySelector("#editor")).then(canvas => {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = 'text-editor.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}