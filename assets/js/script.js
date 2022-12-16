'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// start filter product

const productItem = document.querySelectorAll(".pi");
const all = document.querySelector("#all");
const nike = document.querySelector("#nike");
const adidas = document.querySelector("#adidas");
const puma = document.querySelector("#puma");

const filterBtns = document.querySelectorAll(".filter-btn")

// all btn
all.addEventListener('click', (e)=>{
  filterBtns.forEach((e)=>{
    e.classList.remove("active")
  })

  e.target.classList.toggle("active")
  productItem.forEach((ele)=>{
    ele.style.display = "block"
    
  })
})

// nike btn
nike.addEventListener('click', (e)=>{

  filterBtns.forEach((e)=>{
    e.classList.remove("active")
  })


  e.target.classList.toggle("active")
  productItem.forEach((e)=>{
    e.style.display = "none"
  })


  document.querySelectorAll(e.target.dataset.nike).forEach((e)=>{
    e.style.display = "block"
  })


})


// adidas btn
adidas.addEventListener('click', (e)=>{

  filterBtns.forEach((e)=>{
    e.classList.remove("active")
  })


  e.target.classList.toggle("active")
  productItem.forEach((e)=>{
    e.style.display = "none"
  })


  document.querySelectorAll(e.target.dataset.adidas).forEach((e)=>{
    e.style.display = "block"
  })


})


// puma btn
puma.addEventListener('click', (e)=>{

  filterBtns.forEach((e)=>{
    e.classList.remove("active")
  })


  e.target.classList.toggle("active")
  productItem.forEach((e)=>{
    e.style.display = "none"
  })


  document.querySelectorAll(e.target.dataset.puma).forEach((e)=>{
    e.style.display = "block"
  })


})

//open and close cart

let cartSlider = document.querySelector("#cart-slider");
let openCart = document.querySelector("#cart-icon");
let closeCart = document.querySelector("#close-cart");
let no = document.querySelector("#no")
openCart.addEventListener("click",()=>{
  cartSlider.classList.add("active")
})

no.addEventListener("click",()=>{
  cartSlider.classList.add("active")
})

closeCart.addEventListener("click",()=>{
  cartSlider.classList.remove("active")
})



// add to cart

// let cartBtn = document.querySelectorAll("#cart-btn")
// cartBtn.forEach((e)=>{
//   e.addEventListener("click",()=>{
//     let cardContent =  e.parentElement.parentElement.parentElement.children[1];
//     let cardName = cardContent.children[1].children[0].innerHTML;
//     let cardPrice = +cardContent.children[2].innerHTML.replace("$","");
//     let cardImg = cardContent.parentElement.children[0].children[0].src

//     let cartProduct = document.querySelector("#cart-product")
//     cartProduct.innerHTML += `
//     <div class="cart-item">
//     <img src="${cardImg}" alt="">
//     <p id="product-price">${cardPrice}</p>
//     <input id="product-q" min="1" value="1" type="number">
//     <ion-icon id="close-product" name="close-outline"></ion-icon>
//     </div>
//       `

// //remove product from cart
// let totalCart = document.querySelector("#total-cart")
//   let closeItem = document.querySelectorAll("#close-product")
//   closeItem.forEach((e)=>{
//     e.addEventListener("click",(ele)=>{
//       ele.target.parentElement.remove()
//       totalCart.innerText = Math.round(+totalCart.innerText - cardPrice)

//       cartCounter.forEach((item)=>{
//         item.innerHTML = item.innerHTML - 1
//       }) 

//       if(totalCart.innerHTML <= 50){
//         totalCart.innerHTML = 0
//       }
      
//     })

   
//   })


// //update total price
// function updateTotal(){
//   let totalCart = document.querySelector("#total-cart")

// totalCart.innerText = Math.round(+totalCart.innerText + cardPrice)
// }
// updateTotal()


// //cart counter
// let cartCounter = document.querySelectorAll("#cart-num")
// let cartIten = document.querySelectorAll(".cart-item")

// cartCounter.forEach((e)=>{
//   e.innerHTML= cartIten.length
// }) 


// })


// })






// add to cart 

let addBtn = document.querySelectorAll("#cart-btn");
addBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    let productCard = btn.parentElement.parentElement.parentElement
    let price = +productCard.getElementsByClassName("card-price")[0].value
    let img = productCard.getElementsByClassName("image-contain")[0].src
    let cartProduct = document.querySelector("#cart-product")
    let imgCart = cartProduct.getElementsByClassName("img-cart")
    
  for(let i = 0; i < imgCart.length; i++){
      if (imgCart[i].src == img){
      alert("You Already Added This Item")
      return
    }
  }

  cartProduct.innerHTML += `
  <div class="cart-item">
  <img src="${img}" alt="" class="img-cart">
  <p id="product-price" class="price-item">${price}</p>
  <input class="product-q" id="product-q" min="1" value="1" type="number">
  <ion-icon id="close-product" name="close-outline"></ion-icon>
  </div>
  `
removeCartItem()

totalPrice()

changeQ()

cartCounter ()
  
  })
})



// remove cart item

function removeCartItem(){
  let closeBtns = document.querySelectorAll("#close-product");
  closeBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      btn.parentElement.remove()
      totalPrice()
      cartCounter ()
    })
  })
  
}


//update total price

function totalPrice() {
  let productCards = document.getElementsByClassName("cart-item")
  let total = 0
  for(let i = 0; i < productCards.length; i++){
    let productCard = productCards[i]
    let price = productCard.getElementsByClassName("price-item")[0].innerHTML
    let quan = productCard.getElementsByClassName("product-q")[0].value
    total += price * quan
  }
  total = Math.round(total * 100) / 100
  document.getElementById("total-cart").innerHTML = `$ ${total}`
}

//change quantity
function changeQ(){
  let quantity = document.querySelectorAll("#product-q")
quantity.forEach((input)=>{
  input.addEventListener('change',(e)=>{
    totalPrice()
  })
})
}

//cart counter
function cartCounter (){
  let cartCounter = document.querySelectorAll("#cart-num")
let cartIten = document.querySelectorAll(".cart-item")

cartCounter.forEach((e)=>{
  e.innerHTML= cartIten.length
}) 
}





//datecounter

let countDownDate = new Date("Dec 31 2022 23:59:59").getTime()

let counter = setInterval(()=>{

  let timeNow = new Date().getTime()
  
  let timeDiff = countDownDate - timeNow

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))


  let hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60 ) 

  let minutes = Math.floor(timeDiff % (1000 * 60 * 60) / 1000 / 60 )
  
  let seconds = Math.floor(timeDiff % (1000 * 60) / 1000  )

  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours
  document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
  document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

  console.log();
}, 1000)



//send form message

function sendMail(e){
  
  let thank = document.querySelector("#thank")
  thank.classList.add("active")
  setTimeout(()=>{
    thank.classList.remove("active")
  }, 4000)
  
  

  var params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  const serviceID = "service_1uzqqir";
  const templateID = "template_nivpobe";
  
  emailjs.send(serviceID,templateID,params).then((res) =>{
  
    
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("message").value = '';
      document.getElementById("phone").value = '';
      console.log(res);

    }
  )
  .catch((err)=> console.log(err))


  alert("sucsess")
  window.scrollTo(1000,0)
}


// chat bot

let botIcon = document.querySelector(".bot-icon")
let chatBot = document.querySelector(".bot-chat")
let closeBot = document.querySelector(".close-bot")


botIcon.addEventListener("click",(e)=>{

  botIcon.classList.add("active")
  chatBot.classList.add("active")
})
closeBot.addEventListener("click",(e)=>{

  botIcon.classList.remove("active")
  chatBot.classList.remove("active")
})




async function get(){
  const res = await fetch("chatbot.json");
  const data = await res.json()

  let chatB = document.querySelector("#chatB")

  chatB.onsubmit = (e)=>{
    

    let btnBot = document.querySelector("#btnBot")
    
      let chat = document.querySelector("#chat")
      let chatArea = document.querySelector("#chat-area")
      
    if(chat.value ==""){
      chat.placeholder ="please enter you message"
      chat.style.border = "red solid 1px"
    }else{
      chat.style.border = "none"
      chat.placeholder ="message"
      data.forEach((e)=>{
        if(chat.value.trim().toLowerCase() === e.q){
          chatArea.innerHTML +=`<p class="ask">${e.q}</p>`
          let timeout = Math.floor(Math.random()* 5000)
          chatArea.innerHTML +=`<div class="loading">
          <span></span>
          <span></span>
          <span></span>
          </div>`
          let loading = document.querySelectorAll(".loading")
          setTimeout(()=>{
            loading.forEach((e)=>{
              e.style.display = "none"
            })
          },timeout)
          
          setTimeout(()=>{
            chatArea.innerHTML +=`<p class="answer">${e.A}</p>`
            
          }, timeout)
        }
      })
    }


      chat.value=""
    
  e.preventDefault()

  }
}
get()




var random = Math.floor(Math.random() * 2000); 
// document.onload = wow() {
// 	setTimeout(function(){
//     ;
//     
// 		// $('body').addClass('loaded');
// 	}, 1000);
// };


window.addEventListener("load", ()=>[
  setTimeout(()=>{
    console.log("working ")
    document.querySelector("body").classList.add("loaded")
  }, random)
])