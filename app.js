/* fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
   .then(response => response.json())
      .then(json => console.log(json.title)) */

const btnAdd = document.getElementById("btnCargar")
btnAdd.addEventListener("click",()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
   // console.log(json)
   let info = "";
   for (let i=0;i<json.length;i++){
     //console.log("usuario" + json[i])
     info += `<option value = '${json[i].id}' > ${json[i].name} </option>`
   }
   const datos = document.getElementById("users")
   datos.innerHTML=info;
  })
})

const menuUser = document.getElementById("users");
menuUser.addEventListener("change",()=>{
  const divdatos = document.getElementById("posts") 
  let id = document.getElementById("users").value
  fetch('https://jsonplaceholder.typicode.com/posts?userId='+ id)
  .then((response) => response.json())
  .then((json) => {
    let datos = '';
    for (let i=0;i<json.length;i++){
      datos += `<div>
        <h3>${json[i].title}</h3> 
        <p>${json[i].body}</p>
      </div>`
    }
    divdatos.innerHTML = datos;
  });
})