
var ul = document.getElementById('won');
console.log(ul);


async function getAll() {
    try {
        const myHeaders = new Headers();


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
  
      
        /* 
          myHeaders.append('Content-Type', 'application/json'); 
          since it's a get request you don't need to specify your content-type
        */
      
        myHeaders.append('Authorization', 'Bearer '+ ac.accessToken)
        myHeaders.append('Accept', 'application/json'); 
 myHeaders.append('Content-Type', 'application/json'),{
    body:JSON.stringify({	"username": "the", "password" : "12345678"})
};; 
       
       const response =  await fetch('http://localhost:3000/products', {
          method: 'GET',
         
          headers: myHeaders,
        } )
        const data = await response.json();
        console.log(data);

        let tiles ="";

        for (prod of data ){
           
       tiles +=/*`   <ul class ="tilesWrap>  
       <li>
           <h2>${prod.price}</h2>
           <h3>${prod.title}></</h3>
           <p>${prod.description}
               
           </p>
      
       </li>
     </ul>`*/   `<li><h1>${prod.price}kr</h1><h6>${prod.stock} in stock</h6>
           <h1>${prod.title}</</h1>
           <p>${prod.description}
               
           </p>
           <a href="specific.html?id=${prod._id}">more</a>
           
      </li>`


        }  
        
        
  

     ul.innerHTML=tiles;
       
       


       

     
  
     

      


      

        

       
      
     

    
       
    
       
      

     
      
    

    
        
    } catch (err){
        console.log('not getting anything from all');
    }}
getAll();