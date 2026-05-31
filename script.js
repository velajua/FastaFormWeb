const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const usersInput = document.querySelector("#users");
const credentialsInput = document.querySelector("#credentials");
const monthsInput = document.querySelector("#months");
const fastaformCost = document.querySelector("#fastaformCost");
const rows = document.querySelectorAll(".comparison-table .table-row:not(.table-head)");

function numericValue(input, fallback) {
  const value = Number.parseInt(input.value, 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function updateCalculator() {
  const users = numericValue(usersInput, 1);
  const credentials = numericValue(credentialsInput, 1);
  const months = numericValue(monthsInput, 12);
  const fastaformTotal = credentials * 20;

  fastaformCost.textContent = currency.format(fastaformTotal);

  rows.forEach((row) => {
    const monthlyUserPrice = Number.parseFloat(row.dataset.monthlyUserPrice || "0");
    const flatMonthlyPrice = Number.parseFloat(row.dataset.flatMonthlyPrice || "0");
    const minUsers = Number.parseInt(row.dataset.minUsers || "1", 10);
    const billableUsers = Math.max(users, minUsers);
    const subscriptionTotal = monthlyUserPrice
      ? billableUsers * monthlyUserPrice * months
      : flatMonthlyPrice * months;
    const difference = subscriptionTotal - fastaformTotal;

    row.querySelector("[data-cost]").textContent = currency.format(subscriptionTotal);
    row.querySelector("[data-difference]").textContent =
      difference >= 0 ? `${currency.format(difference)} more` : `${currency.format(Math.abs(difference))} less`;
  });
}

[usersInput, credentialsInput, monthsInput].forEach((input) => {
  input.addEventListener("input", updateCalculator);
});

updateCalculator();
