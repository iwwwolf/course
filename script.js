'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 1; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
          b = +prompt('Во сколько обойдется?', '');
      
      if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && b > 0) {
        console.log('Всё верно');

        appData.expenses[a] = b;
      } else {
        i = i -1;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let optionalExpense = prompt('Статья необязательных расходов', '');
      appData.optionalExpenses[i + 1] = optionalExpense
    }
  },
  chooseIncome: function() {
    let items = prompt('Что принесёт доп. доход? (Перечислите через запятую)', '');
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то ещё?', ''));
    appData.income.sort();
  }
};



// function getExpense() {
//   //let a = prompt('Введите обязательную статью расходов в этом месяце', '');

//   if ((typeof (a)) != 'string' || (typeof (a)) === null || a === '') {
//     alert('Укажите обязательную статью расходов');
//     return getExpense();
//   } else {
//     return a;
//   }
// }

// function getExpensePrice() {
//   //let b = +prompt('Во сколько обойдется?', '');


//   if ((typeof (b)) != 'number' || b <= 0 || isNaN(b)) {
//     alert('Укажите во сколько обойдутся обязательные расходы');
//     return getExpensePrice();
//   } else {
//     return b;
//   }
// }

// function addExpense() {
//   let expense = getExpense(),
//     expensePrice = getExpensePrice();

//   appData.expenses[expense] = expensePrice;

// }