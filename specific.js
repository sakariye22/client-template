console.log('hello');
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))
async function getSpecific(){


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
   document.getElementById('stock').innerHTML+=`<p>${lastData.stock} i lager</p>`;
   document.getElementById('title').innerText= lastData.title;
   document.getElementById('desc').innerText= lastData.description;
   document.getElementById('price').innerHTML+=`${lastData.price} kr`;


} catch(error){
    console.log(error);
}
} 

getSpecific();
