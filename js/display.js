import { apiPost } from "./openAPI.js";
import { userQuestion } from "./localstorage.js";
import { showLoading } from "./loading.js";

const $input = document.querySelector("input");
const $chatList = document.querySelector(".chat-wrap");
const $form = document.querySelector("form");

// 사용자의 질문
let question = "";

// input에 입력된 질문 받아오는 함수
$input.addEventListener("input", (e) => {
    question = e.target.value;
});

// 채팅창에 질문 그려주는 함수
export const printQuestion = () => {
    if (question) {
        const div = document.createElement("div");
        div.classList.add("user-question");
        const ul = document.createElement("ul");
        ul.setAttribute("id", "userQuestionlist");
        const li = document.createElement("li");
        li.classList.add("user-questionlist");
        li.innerHTML = question;

        ul.append(li);
        div.append(ul);

        $chatList.appendChild(div);
    }
};

// 채팅창에 답변 그려주는 함수
export const printAnswer = (answer) => {
    const div = document.createElement("div");
    div.classList.add("chatbot-answer");

    const botImg = document.createElement("img");
    botImg.classList.add("chatbot-img");
    botImg.setAttribute("src", "img/chef.png");

    const ul = document.createElement("ul");
    ul.setAttribute("id", "chatbotAnswerlist");

    const li = document.createElement("li");
    li.classList.add("chatbot-answerlist");
    li.innerHTML = answer;

    ul.append(li);
    div.append(botImg);
    div.append(ul);

    $chatList.appendChild(div);
};

// form 태그 submit 시 발생하는 이벤트
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    $input.value = null;
    userQuestion(question);
    printQuestion();
    showLoading();
    apiPost();
});
