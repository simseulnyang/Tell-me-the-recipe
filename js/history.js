const $historyList = document.querySelector(".history-titlelist");
const $recipeList = document.querySelector(".history-recipecontents-wrap");

// addEventListener('click') 이벤트 printHistory함수 활성화
const $historyListBtn = document.querySelector(".history-updatebtn");
$historyListBtn.addEventListener("click", printHistory);

// history 목록에 localstorage 저장된 userQuestions 데이터를 버튼으로 그려서 화면 왼쪽에 column 나열하기

let saveHistory = JSON.parse(localStorage.getItem("saveHistory"));
saveHistory = saveHistory ?? [];

function printHistory() {
    console.log($historyList);

    for (const item of saveHistory) {
        const recipeBtn = document.createElement("button");

        recipeBtn.textContent = item.userQuestions;
        recipeBtn.setAttribute("class", "recipe-titlebtn");
        recipeBtn.setAttribute("id", item.len);
        recipeBtn.addEventListener("click", printRecipeContent);

        $historyList.appendChild(recipeBtn);
    }
}

// history 목록에 생성된 btn 클릭하면 해당 버튼의 chatbotAnswers 데이터가 화면 오른쪽에 보여지기

function printRecipeContent(e) {
    e.preventDefault();

    const idx = saveHistory.findIndex((item) => item.len == e.srcElement.id);

    const content = document.querySelector(".recipe-content");
    if (content) {
        content.textContent = saveHistory[idx].chatbotAnswers;
    } else {
        const content = document.createElement("article");
        content.setAttribute("class", "recipe-content");
        content.textContent = saveHistory[idx].chatbotAnswers;

        $recipeList.append(content);
    }
}
