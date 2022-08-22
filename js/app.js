const list = document.getElementById("list");
function selectPlayer(event) {
   const playerName = event.parentNode.children[0].innerText;
   if (list.children.length < 5) {
      const li = document.createElement("li");
      li.innerText = `${playerName}`;
      list.appendChild(li);
      event.setAttribute("disabled", "");
   } else {
      alert("You already select Top 5 Players... Please! Reload the page and Select the Players again");
   }
}
function playerExpenses() {
   const playerPrice = parseInt(document.getElementById("player-price").value === "" ? "0" : document.getElementById("player-price").value);
   const playerExpense = document.getElementById("player-expense");
   playerExpense.innerText = playerPrice * list.children.length;
   return playerExpense.innerText;
}
document.getElementById("calc-btn").addEventListener("click", function () {
   playerExpenses();
});

document.getElementById("calc-total").addEventListener("click", function () {
   const playerExpense = parseInt(playerExpenses());
   const managerPrice = parseInt(document.getElementById("manager-price").value === "" ? "0" : document.getElementById("manager-price").value);
   const couchPrice = parseInt(document.getElementById("couch-price").value === "" ? "0" : document.getElementById("couch-price").value);

   document.getElementById("total-expense").innerText = playerExpense + managerPrice + couchPrice;
   console.log(typeof playerExpense);
   console.log(typeof managerPrice);
   console.log(typeof couchPrice);
});

const calcBtn = document.getElementById("calc-btn");
const playerPrice = document.getElementById("player-price");
const playerExpense = document.getElementById("player-expense");
const managerPrice = document.getElementById("manager-price");
const couchPrice = document.getElementById("couch-price");
const totalBtn = document.getElementById("calc-total");
const totalExpense = document.getElementById("total-expense");
