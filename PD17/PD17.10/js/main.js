function sortAscending(){
  let list = document.getElementById("list");
  let listElements = Array.from(list.getElementsByTagName("li"));


  listElements.sort(function(a, b){
    return a.textContent.localeCompare(b.textContent);

  })

  list.innerHTML = '';
  listElements.forEach(function(element){
    list.appendChild(element);
  })

document.createTextNode
}