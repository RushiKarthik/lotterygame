const pickNumberBtn = document.getElementById("pickNumberBtn");  
const resultBtn = document.getElementById("result");  
const lotterySheetContainer = document.getElementById("lotterySheetContainer");  
let gifts = ["₹100 Cash",
"Toy Car",
"Chocolate Box",
"₹500 Cash",
"Smartphone Cover",
"Book",
"Headphones",
"₹50 Cash",
"Gift Voucher",
"Watch",
"Teddy Bear",
"Bluetooth Speaker",
"Movie Ticket",
"₹200 Cash",
"Puzzle Game",
"Perfume",
"Sunglasses",
"₹1000 Cash",
"Board Game",
"Fitness Band",
"Digital Clock",
"Lamp",
"Shopping Voucher",
"Laptop Bag",
"Wireless Mouse",
"Travel Mug",
"Notebook Set",
"Gaming Mousepad",
"₹250 Cash",
"Keychain",
"Water Bottle",
"Portable Charger",
"Desk Organizer",
"Cooking Set",
"Action Figure",
"₹300 Cash",
"Travel Pillow",
"Mini Backpack",
"Personalized Mug",
"Gaming Controller",
"Camera Strap",
"Toy Robot",
"₹750 Cash",
"Sports Equipment",
"Pen Set",
"Bluetooth Earbuds",
"Digital Photo Frame",
"Wallet",
"Backpack",
"Gift Hamper",  

];  
   pickNumberBtn.addEventListener("click",function(){
          for(let i=1;i<50;i++){  
                    document.getElementById(i).classList.remove("winningBox");
          }  
          resultBtn.textContent = "please Wait...";  
          setTimeout(function (){
          let randomNum = Math.random() * 50;  
          let drawnNumber = Math.floor(randomNum) + 1;  
          console.log(gifts[drawnNumber - 1]);
          let gift = gifts[drawnNumber - 1];  
          resultBtn.textContent = drawnNumber;  
          resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;  
          document.getElementById(`${drawnNumber}`).classList.add("winningBox");
          },5000);
          });
          gifts.forEach(function (value,i){
                    const boxElement = `<div class = "box" id = "${i+1}">${i+1}.${value}</div>`;  
                    console.log(boxElement);
                    lotterySheetContainer.insertAdjacentHTML("beforeend",boxElement);
          });  

