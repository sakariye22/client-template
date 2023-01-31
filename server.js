






  var ul = document.getElementById('won');
 
  var tes= document.getElementById('text');
  const theTitle2 = document.getElementById('title2');
  const ul2 = document.getElementById('second');

  

  const myHeaders5= new Headers();
        
        
   

  
 



   //getting all products into products.html 


   async function getAll() {
    try {
        const myHeaders = new Headers();
      
        /* 
          myHeaders.append('Content-Type', 'application/json'); 
          since it's a get request you don't need to specify your content-type
        */
      
        myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwOTMyNTN9.UaaSkn0SI2msO5F6nh5voIW_gTAmpZ4J1cSE_ZqOFbM')
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
     </ul>`*/   `<li>${prod.stock} i lager  <h2>${prod.price}</h2>
           <h3>${prod.title}></</h3>
           <p>${prod.description}
               
           </p>
        <button class ="swear" id =${prod._id}> DELETE</button>
        <a href="update.html?id=${prod._id}"><button>UPDATE</button></a>
      </li>`


        }  
        
        
       ul.innerHTML=tiles;

     
       
       


       

     
  
     

      


      

        

       
      
     

    
       
    
       
      

     
      
    

    
        
    } catch (err){
        console.log('not getting anything from all');
    }
      
      var fetchBtn = document.getElementsByClassName('swear');
      console.log(fetchBtn);

      for(he of fetchBtn){
        he.addEventListener('click', async function (e) {
         e.preventDefault();
         console.log(e.target.parentNode.parentNode);
         console.log(e.target.id);
         try{ 
          var deleteHeaders = new Headers();
          deleteHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwOTMyNTN9.UaaSkn0SI2msO5F6nh5voIW_gTAmpZ4J1cSE_ZqOFbM')


          const theResponse =  await fetch('http://localhost:3000/products/'+e.target.id,{
          method: 'DELETE',
          
          //credentials: 'include',
           redirect: 'follow',
         
          headers: deleteHeaders,
        } )
        const data10 = await theResponse.json();
        console.log(data10);
       e.target.parentNode.parentNode.remove();


         }
         catch (err){
          console.log(err);
         }

         
        })
    
    
        
      }   
      async function uppdatera (){

      

     

      let urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.get('id'));

      try {
        var updateHeaders = new Headers();
          updateHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwOTMyNTN9.UaaSkn0SI2msO5F6nh5voIW_gTAmpZ4J1cSE_ZqOFbM')


  




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




      }
      uppdatera();
      const sistaDel = document.getElementById('myForm2');
      console.log(sistaDel);
      sistaDel.addEventListener('submit',async function upp(e){
        e.preventDefault(); 
        let urlParams2 = new URLSearchParams(window.location.search);
        console.log(urlParams2.get('id'));


       const Title = document.getElementById('title2').value;
       const Desc = document.getElementById('desc2').value;
       const Price = document.getElementById('price2').value;
       const Stock = document.getElementById('stock2').value

          
var headers5 = new Headers();

headers5.append('Accept', 'application/json'); 
headers5.append('Content-Type', 'application/json'); 
headers5.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwMTIxNTd9.t3f2S9LxYS3UtvrKqLgk-Dhl4F7yoNy9xbwGL_wHf4U ');


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
})
      })

  
  
  
  
  
  }
      
      getAll();


     
     
      
/*
              
      const fetchBtn = document.getElementsByClassName('swear');
      console.log(fetchBtn)
      var arr = [];
      [].push.apply(arr, fetchBtn);
      console.log(arr)

      fetchBtn[0].addEventListener('click',async function specific(e) {
      
       const parent = e.currentTarget.parentNode.innerHTML=prod._id;
       console.log(parent);
     try {
       const hdmi =  await fetch('http://localhost:3000/products'+'/'+parent,{
           method: 'GET',
          
           headers: myHeaders,
         } )
         const connection = await hdmi.json();
         console.log(connection.stock); 

         let tiles2 ="";

          /*
      tiles2 +=  `<li>${connection.stock} i lager  <h2>${connection.price}</h2>
          <h3>${connection.title}></</h3>
          <p>${connection.description}
              
          </p>
          
     </li>`*/
     /*

     tes.innerHTML +=  `<li>${connection.stock} i lager  <h2>${connection.price}</h2>
     <h3>${connection.title}></</h3>
     <p>${connection.description}
         
     </p>
     
</li>`
      

        
*/
     
       
     

        /*
       catch(err){
           console.log('error station');
       }

    
      })
     


   */
      
  


/*


      async function getOne() {
        const myHeaders2 = new Headers();


        myHeaders2.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwMTIxNTd9.t3f2S9LxYS3UtvrKqLgk-Dhl4F7yoNy9xbwGL_wHf4U '),{
            body:JSON.stringify({	"username": "the", "password" : "12345678"})
        };
        
     try {
        const response2 = await fetch('http://localhost:3000/products', {
            method: 'GET',
           
            headers: myHeaders2,
          });

    
        const data2 = await response2.json();
        console.log(data2);


    
    
    
    
 

     
       



      } catch(err){

        console.log('not right');
      }};
      getOne();
     
     */


      //posting into api 

      

 const theBtn = document.getElementById('postSubmit');



theBtn.addEventListener('click', async function s(e){
e.preventDefault();

const theTitle = document.getElementById('title').value;
const theDesc = document.getElementById('desc').value;
const thePrice = document.getElementById('price').value;
const theStock = document.getElementById('stock').value;

    


var headers10 = new Headers();

headers10.append('Accept', 'application/json'); 
headers10.append('Content-Type', 'application/json'); 
headers10.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwMTIxNTd9.t3f2S9LxYS3UtvrKqLgk-Dhl4F7yoNy9xbwGL_wHf4U ');

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



}) 
/*
myHeaders5.append('Accept', 'application/json'); 
myHeaders5.append('Content-Type', 'application/json');
   myHeaders5.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsbGFoaSIsImRhdGUiOiIyMDIzLTAxLTI5VDE2OjIyOjI2Ljk4OVoiLCJpYXQiOjE2NzUwMTIxNTd9.t3f2S9LxYS3UtvrKqLgk-Dhl4F7yoNy9xbwGL_wHf4U '),{
       body:JSON.stringify({	"username": "the", "password" : "12345678"})
   }*/

