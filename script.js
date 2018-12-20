'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

function getExpense() {
  let a = prompt('Введите обязательную статью расходов в этом месяце', '');

  if ((typeof (a)) != 'string' || (typeof (a)) === null || a === '') {
    alert('Укажите обязательную статью расходов');
    return getExpense();
  } else {
    return a;
  }
}

function getExpensePrice() {
  let b = +prompt('Во сколько обойдется?', '');


  if ((typeof (b)) != 'number' || b <= 0 || isNaN(b)) {
    alert('Укажите во сколько обойдутся обязательные расходы');
    return getExpensePrice();
  } else {
    return b;
  }

}

function addExpense() {
  let expense = getExpense(),
    expensePrice = getExpensePrice();
    
  appData.expenses[expense] = expensePrice;
}

for (let i = 0; i < 2; i++) {
  addExpense();
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');

}