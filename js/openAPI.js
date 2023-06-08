import { data } from './data.js';
import { printAnswer } from './answerDisplay.js';

// openAPI url
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// api 요청보내는 함수
export const apiPost = async () => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
        .then((res) => res.json())
        .then((res) => {
            printAnswer(res.choices[0].message.content);
        })
        .catch((err) => {
            console.log(err);
        });
};

// 사용자의 질문을 저장해주는 함수
export const userQuestion = (question) => {
    if (data) {
        data.push({
            role: 'user',
            content: question
        });
    }
};

// GPT의 답변을 저장해주는 함수
const chatbotAnswer = async (answer) => {
    if (data) {
        data.push({
            role: 'assistant',
            content: answer
        });
    }
};
