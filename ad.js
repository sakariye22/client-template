
var ourTable = document.getElementById('theTable');

console.log(ourTable)


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

        for(prod of data){

            console.log(prod);
            tiles+=`   <thead>
            <tr>
                <th>Title</th>
                <th>Price </th>
                <th>Stock</th>
                <th>Description 4</th>
                <th>Ad/delete</th>
                <th>Ad/update</th>
            </tr>
            </thead>
            
            <tbody><tr>
            <td>${prod.title}</td>
            <td>${prod.price}</td>
            <td>0${prod.stock}</td>
            <td>${prod.description}</td>
         
          
          <td> <button class="swear" id=${prod._id}> Delete</button></td>
          <td> click to  <a href="update.html?id=${prod._id}"><button>UPDATE</button></a></td>
          </tr>
          </tbody>`


        }

        console.log(tiles);



        ourTable.innerHTML=tiles;
        
  

      
       
       


       

     
  
     

      


      

        

       
      
     

    
       
    
       
      

     
      
    

    
        
    } catch (err){
        console.log('not getting anything from all');
    }


    var fetchBtn = document.getElementsByClassName('swear');
    console.log(fetchBtn);

    for(he of fetchBtn){
      he.addEventListener('click', async function (e) {
       e.preventDefault();
       console.log(e.target.parentNode.parentNode.parentNode);
       console.log(e.target.id);
       try{
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



 var deleteHeaders = new Headers();
          deleteHeaders.append('Authorization', 'Bearer '+ac.accessToken)


          const theResponse =  await fetch('http://localhost:3000/products/'+e.target.id,{
          method: 'DELETE',
          
          //credentials: 'include',
           redirect: 'follow',
         
          headers: deleteHeaders,
        } )
        const data10 = await theResponse.json();
        console.log(data10);
       e.target.parentNode.parentNode.parentNode.remove();
      // window.location.replace('file:///Users/zaki/Library/webb/kommunikation/trying-template/admin.html')

       }
       catch(err){
        console.log(err);
       }

       
}

)




}





     


    



      


    }

getAll();