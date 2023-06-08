const $chatList = document.querySelector('.chat-wrap');

// 채팅창에 답변 그려주는 함수
export const printAnswer = (answer) => {
    let div = document.createElement('div');
    div.classList.add('chatbot-answer');

    let botImg = document.createElement('img');
    botImg.classList.add('chatbot-img');
    botImg.setAttribute('src', 'img/chef.png');

    let ul = document.createElement('ul');
    ul.setAttribute('id', 'chatbotAnswerlist');

    let li = document.createElement('li');
    li.classList.add('chatbot-answerlist');
    li.innerHTML = answer;
    ul.append(li);
    div.append(botImg);
    div.append(ul);
    $chatList.appendChild(div);
};
