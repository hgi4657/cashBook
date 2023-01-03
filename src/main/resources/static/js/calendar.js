const date = new Date();

const Year = date.getFullYear();
const Month = date.getMonth();

document.querySelector('.year-month').textContent = `${Year}년 ${Month + 1}월`;

// 이전 달 마지막 날짜
const prevLast = new Date(Year, Month, 0);
// 이번 달 마지막 날
const thisLast = new Date(Year, Month + 1, 0);


const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay; i++) {
        prevDates.unshift(PLDate - i);
    }
}

for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`;
});

document.querySelector('#dates').innerHTML = dates.join('');