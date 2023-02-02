console.log('hello');



const theBtn = document.getElementById('postSubmit');



theBtn.addEventListener('click', async function s(e){
e.preventDefault();

const theTitle = document.getElementById('title').value;
const theDesc = document.getElementById('desc').value;
const thePrice = document.getElementById('price').value;
const theStock = document.getElementById('stock').value;

const de =  await fetch ('http://localhost:3000/apiUser/token',{
  method:'POST',
  headers : {
    'Content-Type' : 'application/json' 

  },


  body:JSON.stringify({			"username": "jee",
	"password" : "12345678"})

});
 const ac = await de.json();

console.log(ac.accessToken);






    


var headers10 = new Headers();

headers10.append('Accept', 'application/json'); 
headers10.append('Content-Type', 'application/json'); 
headers10.append('Authorization', 'Bearer '+ ac.accessToken);

const returned =  await fetch('http://localhost:3000/products', {
    method: 'POST',
    //mode: 'same-origin',
    //credentials: 'include',
    //redirect: 'follow',
    headers: headers10,
    body: JSON.stringify({
        title: theTitle,
        description: theDesc,
        price : thePrice,
        stock : theStock
    }),
}).then(resp => {
    console.log(returned)

}).catch(err => {
   console.log('hello');
})
window.location.replace('file:///Users/zaki/Library/webb/kommunikation/trying-template/admin.html')

})