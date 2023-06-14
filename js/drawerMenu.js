// 화면 축소 시 좌측 상단에 보여지는 hamburger menu icon 이벤트 함수
// icon 클릭 시 드로워메뉴 화면 노출, 한번 더 클릭하면 메뉴 화면 사라짐
const $menuClickBtn = document.querySelector(".more-btn");
$menuClickBtn.addEventListener("click", (e) => {
    const $navBar = document.querySelector(".header-menu");
    const $moreBtn = document.querySelector(".more-btn");
    $navBar.classList.toggle("active");
    $moreBtn.classList.toggle("active");
});
