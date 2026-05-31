import { estimateFastaFormCost, estimateSubscriptionCost } from "./pricing.js";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const usersInput = document.querySelector("#users");
const formsInput = document.querySelector("#forms");
const monthsInput = document.querySelector("#months");
const fastaformCost = document.querySelector("#fastaformCost");
const rows = document.querySelectorAll(".comparison-table .table-row:not(.table-head)");

function numericValue(input, fallback) {
  const value = Number.parseInt(input.value, 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function updateCalculator() {
  const users = numericValue(usersInput, 1);
  const forms = numericValue(formsInput, 1);
  const months = numericValue(monthsInput, 12);
  const fastaformTotal = estimateFastaFormCost({ users, forms });

  fastaformCost.textContent = currency.format(fastaformTotal);

  rows.forEach((row) => {
    const subscriptionTotal = estimateSubscriptionCost({
      users,
      forms,
      months,
      monthlyUserPrice: row.dataset.monthlyUserPrice,
      flatMonthlyPrice: row.dataset.flatMonthlyPrice,
      minUsers: row.dataset.minUsers,
      includedUsers: row.dataset.includedUsers,
      includedForms: row.dataset.includedForms
    });
    const difference = subscriptionTotal - fastaformTotal;

    row.querySelector("[data-cost]").textContent = currency.format(subscriptionTotal);
    row.querySelector("[data-difference]").textContent =
      difference >= 0 ? `${currency.format(difference)} more` : `${currency.format(Math.abs(difference))} less`;
  });
}

[usersInput, formsInput, monthsInput].forEach((input) => {
  input.addEventListener("input", updateCalculator);
});

updateCalculator();
