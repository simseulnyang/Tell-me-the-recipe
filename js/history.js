const $historyList = document.querySelector("#historySearchName");

let saveHistory = JSON.parse(localStorage.getItem("saveHistory"));

// history 목록 및 선택 시 contents 보여주기
export const printHistory = () => {
    let li = document.createElement("li");
    li.classList.add("history-searchname");
    li.innerText = saveHistory.userquestion;
    $historyList.appendChild(li);
};
