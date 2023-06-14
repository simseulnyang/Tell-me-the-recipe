const $chatList = document.querySelector(".chat-wrap");

// 채팅창에 답변 그려주기 전 로딩중 image 그려주는 함수
export const showLoading = () => {
    const div = document.createElement("div");
    div.classList.add("chatbot-answer");

    const botImg = document.createElement("img");
    botImg.classList.add("chatbot-img");
    botImg.setAttribute("src", "../img/chef.png");

    const ul = document.createElement("ul");
    ul.setAttribute("id", "chatbotAnswerlist");

    const li = document.createElement("li");
    li.classList.add("chatbot-answerlist");

    const spinnerImg = document.createElement("img");
    spinnerImg.classList.add("spinner-img");
    spinnerImg.setAttribute("src", "../img/Spinner.gif");

    li.append(spinnerImg);
    ul.append(li);
    div.append(botImg);
    div.append(ul);

    $chatList.appendChild(div);
};

// 답변 출력 시 로딩중 image 감춰주는 함수
export const hideLoading = () => {
    const lastDiv = document.querySelector(".chatbot-answer:last-child");
    lastDiv.remove();
};
