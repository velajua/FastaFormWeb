export const FASTAFORM_FORMS_PER_CREDENTIAL = 3;
export const FASTAFORM_CREDENTIAL_PRICE = 20;

function positiveInteger(value, fallback = 1) {
  const number = Number.parseInt(String(value), 10);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function positiveNumber(value, fallback = 0) {
  const number = Number.parseFloat(String(value));
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function blockCount(value, included) {
  const safeValue = positiveInteger(value);
  const safeIncluded = positiveInteger(included);
  return Math.ceil(safeValue / safeIncluded);
}

export function estimateFastaFormCost({ users, forms }) {
  return positiveInteger(users) * blockCount(forms, FASTAFORM_FORMS_PER_CREDENTIAL) * FASTAFORM_CREDENTIAL_PRICE;
}

export function estimateSubscriptionCost({
  users,
  forms,
  months,
  monthlyUserPrice = 0,
  flatMonthlyPrice = 0,
  minUsers = 1,
  includedUsers = 0,
  includedForms = 0
}) {
  const safeUsers = Math.max(positiveInteger(users), positiveInteger(minUsers));
  const safeMonths = positiveInteger(months, 12);
  const perUserPrice = positiveNumber(monthlyUserPrice);
  const flatPrice = positiveNumber(flatMonthlyPrice);
  const userBlocks = includedUsers ? blockCount(safeUsers, includedUsers) : 1;
  const formBlocks = includedForms ? blockCount(forms, includedForms) : 1;

  if (perUserPrice) {
    return safeUsers * perUserPrice * safeMonths * formBlocks;
  }

  return userBlocks * flatPrice * safeMonths * formBlocks;
}
