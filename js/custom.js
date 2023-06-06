// 화면 축소 시 좌측 상단에 보여지는 내비게이션 이벤트 함수
// 내비게이션 클릭 시 사이드화면 노출, 한번 더 클릭하면 사이드화면 사라짐
function menuClick() {
    let $navBar = document.querySelector('.header-menu');
    let $moreBtn = document.querySelector('.more-btn');
    $navBar.classList.toggle('active');
    $moreBtn.classList.toggle('active');
}
