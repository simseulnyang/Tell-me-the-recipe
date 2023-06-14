// addEventListener('click') 이벤트 printHistory함수 활성화
const btntest = document.querySelector(".history-updatebtn");

btntest.addEventListener("click", printHistory);

// history 목록에 localstorage 저장된 userQuestions 데이터 버튼으로 그려서 화면 왼쪽에 column 나열하기

let saveHistory = JSON.parse(localStorage.getItem("saveHistory"));

saveHistory = saveHistory ?? [];

const historyList = document.querySelector(".history-titlelist");

const recipeList = document.querySelector(".history-recipecontents-wrap");

function printHistory() {
    console.log(historyList);

    for (const item of saveHistory) {
        const recipeBtn = document.createElement("button");

        recipeBtn.textContent = item.userQuestions;
        recipeBtn.setAttribute("class", "recipe-titlebtn");
        recipeBtn.setAttribute("id", item.len);
        recipeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const idx = e.target;
            // button 클릭 시 해당 id와 localstorage len 값 비교하여 같은 값 chatbotAnswers 데이터 가져와 오른쪽 화면에 보여주기 : 아직 미완성
            if (idx.id === item.len) {
                const content = document.createElement("article");
                content.setAttribute("class", ".recipe-content");
                content.textContent = saveHistory.chatbotAnswers;
                content.appendChild(recipeList);
            }
        });
        historyList.appendChild(recipeBtn);
    }
}
