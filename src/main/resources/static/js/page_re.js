// 한달 사용 내역, 위시리스트, 고정지출 목록
const cont = document.getElementsByClassName("cont");
const 한달사용리스트 = document.getElementById("한달사용리스트");
const 위시리스트 = document.getElementById("위시리스트");
const 고정지출목록 = document.getElementById("고정지출목록");

// 클릭 시 해당 내역 가져오기
for (let i = 0; i < cont.length; i++) {
    cont.item(i).addEventListener('click', () => {
        const nav_name = document.getElementById(cont.item(i).getAttribute("name"));
        if (nav_name.style.display == 'none') {
            한달사용리스트.style.display = 'none';
            위시리스트.style.display = 'none';
            고정지출목록.style.display = 'none';
            nav_name.style.display = 'block';
        }
        else if (nav_name.style.display == 'block') {
            nav_name.style.display = 'block'
        }
    })
}

