var total = document.querySelector(".money-amount");
var select = document.querySelector(".type");
var amount = document.querySelector(".amount");
var totalValue = 0;
var utility = document.querySelector(".utility");
var comingList = document.querySelector(".coming-list");
var goingList = document.querySelector(".going-list");

document.querySelector(".submit").addEventListener("click", function() {
  if (select.value == "+") {
    if (utility.value == "" || amount.value == "") {
      alert("Please Do Not Leave Blank");
    } else {
      totalValue += parseInt(document.querySelector(".amount").value);
      total.textContent = totalValue;
      comingList.innerHTML +=
        "<li>" +
        utility.value +
        ' +  <span class="plus">$' +
        amount.value +
        "</span></li>";
      console.log(comingList.textContent);
      utility.value = "";
      amount.value = "";
    }
  } else if (select.value == "-") {
    if (utility.value == "" || amount.value == "") {
      alert("Please Do Not Leave Blank");
    } else {
      totalValue -= parseInt(document.querySelector(".amount").value);
      total.textContent = totalValue;
      goingList.innerHTML +=
        "<li>" +
        utility.value +
        ' -  <span class="minus">$' +
        amount.value +
        "</span></li>";

      utility.value = "";
      amount.value = "";
    }
  }
});