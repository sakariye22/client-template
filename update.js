let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))
async function uppdatera(){


try {

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
    var updateHeaders = new Headers();
      updateHeaders.append('Authorization', 'Bearer '+ac.accessToken)







    const lastResponse =  await fetch('http://localhost:3000/products/'+urlParams.get('id'), {
      method: 'GET',
     
      headers: updateHeaders,
    } )
    const lastData = await lastResponse.json();
    console.log(lastData);

    document.getElementById('title2').value=lastData.title;
    document.getElementById('desc2').value=lastData.description;
    document.getElementById('price2').value=lastData.price;
    document.getElementById('stock2').value=lastData.stock;

  }
  catch(err){

    console.log(err);



  }




}uppdatera();
const sistaDel = document.getElementById('myForm2');
      console.log(sistaDel);
      sistaDel.addEventListener('submit',async function upp(e){
        e.preventDefault(); 
        let urlParams2 = new URLSearchParams(window.location.search);
        console.log(urlParams2.get('id'));

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


       const Title = document.getElementById('title2').value;
       const Desc = document.getElementById('desc2').value;
       const Price = document.getElementById('price2').value;
       const Stock = document.getElementById('stock2').value;

          
var headers5 = new Headers();

headers5.append('Accept', 'application/json'); 
headers5.append('Content-Type', 'application/json'); 
headers5.append('Authorization', 'Bearer '+ ac.accessToken)
        console.log('yes');


const returned2 =  await fetch('http://localhost:3000/products/'+urlParams2.get('id'), {
  method: 'PATCH',
  //mode: 'same-origin',
  //credentials: 'include',
  redirect: 'follow',
  headers: headers5,
  body: JSON.stringify({
      title: Title,
      description: Desc,
      price : Price,
      stock : Stock
  }),
}).then(resp => {
  console.log(returned2)
  

}).catch(err => {
 console.log('hello');
 window.location.replace('file:///Users/zaki/Library/webb/kommunikation/trying-template/admin.html')
})
      })

  
  
  
  