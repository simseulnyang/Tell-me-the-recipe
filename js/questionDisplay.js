import { apiPost, userQuestion } from './openAPI.js';

const $input = document.querySelector('input');
const $chatList = document.querySelector('.chat-wrap');
const $form = document.querySelector('form');

// 사용자의 질문
let question;

// input에 입력된 질문 받아오는 함수
$input.addEventListener('input', (e) => {
    question = e.target.value;
});

// 채팅창에 질문 그려주는 함수
const printQuestion = async () => {
    if (question) {
        let div = document.createElement('div');
        div.classList.add('user-question');

        let ul = document.createElement('ul');
        ul.setAttribute('id', 'userQuestionlist');

        let li = document.createElement('li');
        li.classList.add('user-questionlist');
        li.innerHTML = question;

        ul.append(li);
        div.append(ul);

        $chatList.appendChild(div);
        question = false;
    }
};

// submit
$form.addEventListener('submit', (e) => {
    console.log($input.value);
    e.preventDefault();
    $input.value = null;
    userQuestion(question);
    printQuestion();
    apiPost();
});
