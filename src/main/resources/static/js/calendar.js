let date = new Date();

/** 달력 만들기 함수 */
function calender() {
    // 연도 가져오기
    const Year = date.getFullYear();
    // 월 가져오기
    const Month = date.getMonth();

    document.querySelector('.year-month').textContent = `${Year}년 ${Month + 1}월`;

// 현재 날짜의 이전 달 마지막 날짜
    const prevLast = new Date(Year, Month, 0);
// 이번 달 마지막 날짜
    const thisLast = new Date(Year, Month + 1, 0);

// 이전달 마지막 일
    const PLDate = prevLast.getDate();
// 이전달 마지막 요일 (월 = 1, 화 = 2, 수 = 3, 목 = 4, 금 = 5, 토 = 6, 일 = 7 )
    const PLDay = prevLast.getDay();

// 현재 마지막 일
    const TLDate = thisLast.getDate();
// 현재 마지막 요일 (월 = 1, 화 = 2, 수 = 3, 목 = 4, 금 = 5, 토 = 6, 일 = 7 )
    const TLDay = thisLast.getDay();

// 이전 달의 일 리스트(배열)
    const prevDates = [];

// 이번 달 일자 리스트(배열) 0(key-순서) : 1(value - 일자)
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);

// 다음 달의 일 리스트(배열)
    const nextDates = [];


    if (PLDay !== 6) {
        for (let i = 0; i <= PLDay; i++) {
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

// date div 추가하기
    document.querySelector('#dates').innerHTML = dates.join('');

}

// 달력 만들기 함수 호출
calender();

// ================================================================= //

// 이전 달 버튼
const prevMonth = document.getElementsByClassName('prev-btn');
// 다음 달 버튼
const nextMonth = document.getElementsByClassName('next-btn');

// 지난 달로 이동
prevMonth.item(0).addEventListener('click', () => {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    calender();
})

// 다음 달로 이동
nextMonth.item(0).addEventListener('click', () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    calender();
})

// ================================================================= //

// 연도 가져오기
const Year = date.getFullYear();
// 월 가져오기
const Month = date.getMonth();
// 일 가져오기
const TDate = date.getDate();


document.querySelector('#toDate').textContent = `${Year}년 ${Month + 1}월 ${TDate}일`;










