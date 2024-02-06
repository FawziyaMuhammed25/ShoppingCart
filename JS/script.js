let allProducts = document.querySelector(".me");
let shoppingCartIcon = document.querySelector(".shopping_cart");
let badge = document.querySelector("#number");
let cartsProduct = document.querySelector(".carts_products");
const cart=document.querySelector('.cart')
let favaourite = document.querySelector("#favouriteItems")
let logout = document.querySelector(".logout")
let logIn = document.querySelector(".logIn")
let register = document.querySelector(".registre")
let products =[
    {
        id:1,
        Name :"Bebem Natural",
        price :"140.15 EGP",
        category : "napkins",
        imageUrl : "image/1.jpg"
    },
    {
        id:2,
        Name :"Calarx 5xl ",
        price :"34 EGP",
        category : "Detergent",
        imageUrl : "image/2.jpg"
    },
    {
        id:3,
        Name :"Origin  Mouse",
        price :"270.00 EGP",
        category : "Computer ",
        imageUrl : "image/3.jpg"
    },
    {
        id:4,
        Name :"Oxi Lavender ",
        price :"427.00 EGP",
        category : "Detergent",
        imageUrl : "image/4.jpg"
    },
    {
        id:5,
        Name :"Digital speaker",
        price :"160.99 EGP",
        category : "Computer",
        imageUrl : "image/5.jpg"
    },
    {
        id:6,
        Name :"Sanita",
        price :"219.45 EGP",
        category : "Detergent",
        imageUrl : "image/6.jpg"
    },
    {
        id:6,
        Name :"Cap",
        price :"427.00 EGP",
        category : "Clothes",
        imageUrl : "image/EN16.png"
    },
    {
        id:7,
        Name :"women's Jacket",
        price :"550.00 EGP",
        category : "Clothes",
        imageUrl : "image/EN18.png"
    },
    {
        id:8,
        Name :"Thermal Mugs",
        price :"250.30 EGP",
        category : "Winter Essenital",
        imageUrl : "image/EN23.png"
    },
    {
        id:9,
        Name :"Wearable Blankets",
        price :"2500.30 EGP",
        category : "Winter Essenital",
        imageUrl : "image/EN9.png"
    },
    {
        id:10,
        Name :"men's Jacket",
        price :"570.30 EGP",
        category : "Winter Essenital",
        imageUrl : "image/EN20.png"
    },
    {
        id:11,
        Name :"Blankets",
        price :"1500.50 EGP",
        category : "Winter Essenital",
        imageUrl : "image/EN8.png"
    }

];
function displayProduct() 
{
    let y = products.map( (item)=>{
        return `
        <div class="col-3">
                  <div class="products">
                        <div class="product_item ">
                        <div class="product_image  m-auto">
                            <img src="${item.imageUrl}" class="w-100 " alt="">
                        </div>
                        <div class="product_item_desc  ps-5 mt-3">
                            <h5>Product : ${item.Name}</h5>
                            <h5>Price : ${item.price}</h5>
                            <h5>Category :${item.category}</h5>
                        </div>
                        <div class="product_item_action position-relative ">
                            <button class="add_to_cart btn btn-info ms-5  mb-2" onclick="AddCarts(${item.id})" style="display:block;"> Add To Cart</button>
                            <button class="btn btn-danger d-none" id="${item.id}0000" onclick='removeItems(this.id)'> Remove from cart</button>
                            <a href="#" style="margin-left: auto; display: inline-block;" >
                            <i class="fas fa-heart" style="font-size: 1.5rem;" id="${item.id}00000" onclick='addFavourite(this.id)'></i>
                            </a>
                        </div>
                        
                        </div>
                  </div>
               </div>
        `
    })
    document.querySelector(".me").innerHTML =y 
}

displayProduct()
// ************************* Search *********************
logIn.addEventListener('click',()=>{
    localStorage.removeItem('log')
    location.assign('login.html')
})
register.addEventListener('click',()=>{
    
    location.assign('register.html')
})
function searchProduct(Pvalue)
{
    let hasala = " "
   for (let i = 0; i < products.length; i++) {
      
      if (products[i].Name.toLowerCase().includes(Pvalue.toLowerCase())) {
          hasala = `
          <div class="col-3 m-auto">
          <div class="products">
                <div class="product_item ">
                <div class="product_image  m-auto">
                    <img src="${products[i].imageUrl}" class="w-100 " alt="">
                </div>
                <div class="product_item_desc  ps-5 mt-3">
                    <h5>Product : ${products[i].Name}</h5>
                    <h5>Price : ${products[i].price}</h5>
                    <h5>Category :${products[i].category}</h5>
                </div>
                <div class="product_item_action position-relative ">
                    <button class="add_to_cart btn btn-info ms-5  mb-2"  > Add To Cart</button>
                    <i class="far fa-heart fav "></i>
                </div>
                </div>
          </div>
       </div>   `
      }
      else if (products[i].category.toLowerCase().includes(Pvalue.toLowerCase())) {
        hasala += `
        <div class="col-3">
        <div class="products">
              <div class="product_item ">
              <div class="product_image  m-auto">
                  <img src="${products[i].imageUrl}" class="w-100 " alt="">
              </div>
              <div class="product_item_desc  ps-5 mt-3">
                  <h5>Product : ${products[i].Name}</h5>
                  <h5>Price : ${products[i].price}</h5>
                  <h5>Category :${products[i].category}</h5>
              </div>
              <div class="product_item_action position-relative ">
                  <button class="add_to_cart btn btn-info ms-5  mb-2"  > Add To Cart</button>
                  <i class="far fa-heart fav "></i>
              </div>
              </div>
        </div>
         </div>   `
      }
   }
   
   document.querySelector(".me").innerHTML = hasala
}
let fn = localStorage.getItem("userFirstName");
document.getElementById("user").innerHTML = fn
// //////////////////////////////////////////////////////////

 ////////////////////// AddCarts Button /////////////////////
let addCarts = document.querySelector(".add_to_cart");
let addItem =  localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if (addItem) {
    addItem.map((item) => {
        favaourite.innerHTML += `
        <li>
           <span style="margin-right: 20px;">${item.Name}</span>
            <div class="plus">
                 <span style="margin-right: 0px;">${item.id}</span>
                <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plus(${item.id}"></i></a>
                <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minus(${item.id}"></i></a>
             </div>
         </li>
                                
        `
    })
    badge.style.display = "block";
    badge.innerHTML = addItem.length;
   
}
    if (localStorage.getItem("userFirstName")) {
        function AddCarts(pId) {
            let choosenItem = products.find((item) => item.id === pId);
            //  console.log(choosenItem)
            favaourite.innerHTML += `<li>${choosenItem.Name}</li>`
            addItem = [...addItem , choosenItem]
            // console.log(addItem)
             localStorage.setItem("productsInCart" , JSON.stringify(addItem));
             
             let cartsProductLength = document.querySelectorAll(".cart #favouriteItems");
            //  console.log(cartsProductLength.length);
             badge.style.display="block"
             badge.innerHTML = cartsProductLength.length
            // removeCarts.style.display = "block";
            // addCarts.style.display="none";
         }
       
    }else{
        window.location="login.html"
    }
  
///////////////////////////////////////////////////////////////////////////////////
logout.addEventListener('click',()=>{
    localStorage.removeItem('log')
    location.assign('login.html')
})

function viewProduct(){
    location.assign('Cartproducts.html')
   }

 function cartBtn(){
    const arrow=document.querySelector('#arrow');
    arrow.style.color='#007bff';
    if(cart.style.display=='none' && addItem.length!=0){
        cart.style.display='block'
        arrow.classList='fas fa-caret-up arrow'
    }else{
        cart.style.display='none'
        arrow.classList='fas fa-caret-down arrow'


    }
 }
