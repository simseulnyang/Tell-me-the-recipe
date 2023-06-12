let saveHistory = JSON.parse(localStorage.getItem("saveHistory"));
const $historyList = document.querySelector("nav");

// history 목록 및 선택 시 contents 보여주기
export const printHistory = () => {
    let div = document.createElement("div");
    div.classList.add("history-searchlist");
    let ul = document.createElement("ul");
    ul.setAttribute("id", "historySearchName");
    let li = document.createElement("li");
    li.classList.add("history-searchname");
    li.innerHTML = saveHistory.userQuestions;
    let a = document.createElement("a");

    a.append(li);
    ul.append(a);
    div.append(ul);

    $historyList.appendChild(div);
};
