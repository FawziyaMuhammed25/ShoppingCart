let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".me");
let  totalPrice = document.querySelector(".price");
let logout = document.querySelector(".logout")
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

if (productsInCart) {
 let  item = JSON.parse(productsInCart)
    drawProductCarts(item)
}
function drawProductCarts(products) 
{
    allProducts.innerHTML=``;
    let y = products.map( (item)=>{
        return `
        <div class="col-4  ">
        <div class="products bg " >
              <div class="product_item d-flex p-3">
                <div class="product_image ">
                    <img src="${item.imageUrl}" class="w-100 me-3" alt="">
                </div>
                <div class="product_item_desc ms-3 mt-3">
                    <h5>Product : ${item.Name}</h5>
                    <h5>Price : ${item.price}</h5>
                    <h5>Category :${item.category}</h5>
                    <div class="product_item_action position-relative ">
                    <div class="parent d-flex">
                            <div class="icons">
                            <span class="id">${item.id}</span>
                            <i class="fas fa-plus  pl" onclick="pluse(${item.id})"></i>
                            <i class="fas fa-minus  pl1"></i>
                        </div>
                        <button class="remove_to_cart btn btn-danger ms-5  mb-2 " onclick="removeItems(${item.id})" > Remove</button>
                    </div>
                </div>
                </div>
             
              </div>
        </div>
     </div>
     
     `

    })
    allProducts.innerHTML =y ;
}
let fn = localStorage.getItem("userFirstName");
document.getElementById("user-name").innerHTML = fn
logout.addEventListener('click',()=>{
    localStorage.removeItem('log')
    location.assign('login.html')
})
const items=JSON.parse(localStorage.getItem("productsInCart"));
function getTotalPrice(){
    let sum=0;
    let prices=items.map((ele)=>{
        let price=ele.price.split(' ')
        // console.log( parseInt(price[0]))
        return parseInt(price[0]) ;
    })
    for(let i in items){
     
        sum += prices[0] * parseInt(items[i].id)
    }
    console.log(sum)
    totalPrice.innerHTML=sum+'$';
}
 getTotalPrice()
 function removeItems(id){
    var index= items.findIndex((x)=>{
     return x.id==id
  })
  items.splice(index,1)
 
  drawProductCarts(items)
  getTotalPrice()
  localStorage.setItem('items',JSON.stringify(items))
 }

 


       
