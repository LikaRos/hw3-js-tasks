
//*******HW#3 # 1 ******* */
// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

/*variant 1*/

function difference(arr) {
  let min = arr[0];
  let max = arr[0];

  if (arr.length <= 1) {
    return 0;
  }
  arr.forEach((item) => {
    if (item < min) {
      min = item;
    } else if (item > max) {
      max = item;
    }
  });
  let diff = max - min;
  return diff;
}

/*variant 2*/

function difference(arr) {
  arr.sort((a, b) => a - b);
  let diff = arr[arr.length - 1] - arr[0];
  return diff;
}

/*variant 3*/
let difference = function (arr) {
  return Math.max(...arr) - Math.min(...arr);
};


//*******HW#3 # 2 ******* */
// Задача2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

function wordCalc(sentence, num) {
  let arrOfStr = sentence.split(" ").filter((item) => {
    return item.length > num;
  });
}


//*******HW#3 # 3 ******* */
// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false

function combineString(sentence1, sentence2) {
  if (sentence1.endsWith(sentence2)) {
      return true;
  }
}

//*******HW#3 # 4 ******* */
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

function findAverage(arr){
  const result = [];
  for (let i=0; i < arr.length-1; i++){
    let average = (arr[i] + arr[i+1])/2;
    result.push(average);
  }
  return result;
}


//*******HW#3 # 5 a ******* */

// Створіть функцію, яка приймає рядок і повертає кількість (кількість)
// голосних, які у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

function countVowels (sentence) {
  let vowel = ['a', 'e', 'i', 'o', 'y', 'u']
  let vowelsTotal = 0;
    for (let i=0; i < sentence.length; i++){
      if (vowel.indexOf (sentence[i].toLowerCase())!= -1){
        vowelsTotal +=1;
      }
    }
  return vowelsTotal;
}


//*******HW#3 # 5.2 ******* */
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

function removeVowels (sentence) {
  let letters = ['a', 'b', 'c'];
  if (!/[a-cA-C]/.test(sentence)){
    return null;
  }
  for (let i=0; i < sentence.length; i++){
    const indx = letters.indexOf (sentence[i].toLowerCase());
    if (indx != -1){
      sentence = sentence.split(sentence[i]).join('');
    }
  }
  return sentence;
}
   
 
//*******HW#3 # 6 ******* */
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
// Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

function difference (arr, arr2){
  result = [...arr, ...arr2];
  result = result.filter((el, ind)=> result.indexOf(el)===ind);
  return result;
}


//*******HW#3 # 7 ******* */
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}
function swap (obj){
  let swapObject = {};
  for (let key in obj){
    swapObject[obj[key]] = key;
  };
  return swapObject;
}


//*******HW#3 # 8 ******* */
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
// Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1

function calculateDifference(obj, num){
  let total = 0;
  for(let key in obj){
    total += obj[key];
  }
  let difference = total - num;
  return difference;
}


//*******HW#3 # 9 ******* */
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h). Виміри вводить користувач через форму.
// Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false

function doesBrickFit(a, b, c, w, h) {
  if(a <= 0 || b <= 0 || c <= 0 || w <= 0 || h <= 0){
    return false;
  }

  let brick = [a, b, c];
  let place = [w, h];
  
  brick.sort((a, b) => b - a);
  place.sort((a, b) => b - a);
  
  if (brick[1] <= place[0] && brick[2] <= place[1]) {
     return true;
  }
  return false;
}


//*******HW#3 # 10 ******* */
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

function findFileName (str){
 let result = str.slice(str.lastIndexOf("\\")+1, str.indexOf("."));
 return result;
}


//*******HW#3 # 11 ******* */
// Дано два рядки. Чи можна перший рядок отримати з другого циклічним
// зрушенням?

function checkIfCyclicShift(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if ((str1 + str1).indexOf(str2) > -1) {
    return true;
  }
  
  return false;
}


//*******HW#3 # 12 ******* */
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

function findMinimalDiff(a) {
  let b = [], c = [];
  a.sort((a, b) => a-b);
  
  while (a.length > 0) {
    let x = 0, diff = 0;
    
    for (let i = 0; i < a.length - 1; i++) {
      if (diff > a[i+1] - a[i]) {
        diff = a[i+1] - a[i];
        x = i;
      }  
    }

    b.push(a[x]);
    c.push(a[x+1]);
    a.splice(x, 2);
  }
}

//*******HW#3 # 13 ******* */
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

function transformString(str) {
  result = str.substring(0, 1) + str.substring(1).toLowerCase();
  result = result.replace(/(((https?:\/\/)|(www\.))[^\s]+)/g, '[посилання заборонені]');
  result = result.replace(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g, '[контакти заборонені]');
  result = result.replace(/(^|\s)\d{3,}(\s|$)/g, ' ');
  
  if (result.length > str.length) {
    setTimeout(() => alert('Вам потрібна допомога?'), 5000);
  }
    return result;
}

//*******HW#3 # 14 ******* */
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

function checkBrackets(str) {
  let openBrackets = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openBrackets++;
    }
    
    if (str[i] === ')') {
      openBrackets--;
    }
    
    if (openBrackets < 0) {
      return false;
    }
  }
  
  if (openBrackets !== 0) {
    return false;
  }
  
  document.write('<div style="user-select: none;" oncontextmenu = "return false;">' + str + '</div>');
  
  return true;
}


//*******HW#3 # 15 ******* */

// Запросіть користувача ввести якусь фразу. Відобразіть кожне слово у
// вигляді списку ul li. Також відобразіть перше слово UPPERCASE, а останні 2
// з маленької. Знайдіть усі літери "а" їх кількість виведіть у alert вікно. Після
// закриття alert - реалізувати скрипт, який через 5 хвилин бездіяльності
// користувача (нічого не натискається, нічого не виділяється, не рухається
// прогрес-бар) висвітлює повідомлення "Ви ще тут?" Якщо так, користувач
// залишається на сторінці, якщо ні сторінка закривається.

function displayList(phrase) {
  let phraseArr = phrase.split(' ');
  
  if (phraseArr.length === 0) {
    alert('Кількість а: 0');
    noActionConfirm();
    return;
  }
  
  let aCount = phrase.match(/[aAаА]/g).length;
  phraseArr[0] = phraseArr[0].toUpperCase();
  
  if (phraseArr.length > 2) {
    phraseArr[phraseArr.length - 2] = phraseArr[phraseArr.length - 2].toLowerCase();
    phraseArr[phraseArr.length - 1] = phraseArr[phraseArr.length - 1].toLowerCase();
  }
  
  let html = '<ul>';
  for (let i = 0; i < phraseArr.length; i++) {
    html += '<li>' + phraseArr[i] + '</li>';
  }
  html += '</ul>';
  
  document.write(html);
  alert('Кількість а: ' + aCount);
  noActionConfirm();
}

function noActionConfirm() {
  let timerId = setTimeout(function timeout() {
    if (!confirm('Ви ще тут?')) {
      closeWindow();
    }
    
    timerId = setTimeout(timeout, 5000);
  }, 5000);
}

function closeWindow() {  
  let myWindow = open(location, '_self');
  myWindow.close();

  return false;
}



//*******HW#3 # 16 ******* */
// Створити пароль для користувача. Вимоги: довжина від 6 до 20
// символів повинен бути рівно один символ підкреслення, хоча б дві великі
// літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.

function testPassword(password) {
  if (password.length < 6 || password.length > 20) {
    return false;
  }
  
  if (password.match(/\d{2,}/)) {
    return false;
  }
  
  let underscores = password.match(/_/g);
  
  if (!underscores || underscores.length > 1) {
    return false;
  }
  
  let capitalLetters = password.match(/[A-Z]/g);
  
  if (!capitalLetters || capitalLetters.length < 2) {
    return false;
  }
  
  let digits = password.match(/\d/g);
  
  if (digits && digits.length > 5) {
    return false;
  }
  
  return true;
}

//*******HW#3 # 17 ******* */
// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

function reverseArray(arr){
  arr = arr.sort((a,b)=>b-a);
  const lastElem = arr[arr.length-1];
  const arr2 = arr.splice(-1);
  result = [lastElem, ...arr.splice(0)];
  return result;
}
