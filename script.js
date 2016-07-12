document.querySelector('ul').addEventListener('click', function (event) {
    for (i=0, l=document.getElementsByTagName('a').length; i<=l; i++) {
    if (event.target == document.getElementsByTagName('a')[i]) {
        event.target.parentNode.remove()}
    }
});

document.querySelector('button').addEventListener('click', function (event) {
    if (document.querySelector('input').value == '') {
        document.querySelector('input').style.borderColor='red', alert("Can't create element without name")};
     if (document.querySelector('input').value != '' && document.getElementById('delete').checked == false) {
         var newLi = document.createElement('li');
         newLi.innerHTML = document.querySelector('input').value;
         document.querySelector('ul').appendChild(newLi)
         newLi.className = 'list-group-item'
         document.querySelector('input').value = ''
     }
    if (document.querySelector('input').value != '' && document.getElementById('delete').checked) {
        var newLi = document.createElement('li');
        newLi.innerHTML = document.querySelector('input').value;
        document.querySelector('ul').appendChild(newLi)
        newLi.className = 'list-group-item'
        var newA = document.createElement('a');
        newA.innerHTML = 'Delete item'
        document.querySelector('ul').lastChild.appendChild(newA)
        newA.className = "text-danger pull-right";
        document.querySelector('input').value = '';
        document.getElementById('delete').checked = false
    }
    event.preventDefault()
    return false
})