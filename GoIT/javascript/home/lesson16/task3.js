var allLi = document.getElementsByTagName('li');

for (var i = 0; i < allLi.length; i++) {
    var text = allLi[i].firstChild.textContent;
    var count = allLi[i].getElementsByTagName('li').length;
    alert(text.trim() + ':' + count);
};