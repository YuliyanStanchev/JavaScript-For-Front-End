function extractText() {
    let listItem = document.querySelectorAll('#items li');
    let text = "";

    for (const el of listItem){
        text += el.textContent + "\n";
    }
    document.getElementById('result').value = text;
}