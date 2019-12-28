function addItem() {
    let newlistItemtext = document.getElementById('newItemText');

    let li = document.createElement('li');
    li.textContent = newlistItemtext.value;

    document.getElementById('items').appendChild(li);
    newlistItemtext.value="";
}