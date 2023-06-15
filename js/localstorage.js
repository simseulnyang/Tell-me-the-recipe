import { data } from "./data.js";

let saveHistory = JSON.parse(localStorage.getItem("saveHistory"));

saveHistory = saveHistory ?? [];

let userQuestions = "";
let chatbotAnswers = "";

// 사용자의 질문을 저장해주는 함수
export const userQuestion = (question) => {
    if (data) {
        data.push({
            role: "user",
            content: question
        });

        userQuestions = question;
    }
};

// GPT의 답변을 저장해주는 함수
export const chatbotAnswer = async (answer) => {
    if (data) {
        data.push({
            role: "assistant",
            content: answer
        });

        chatbotAnswers = answer;
    }
};

//localstorage에 저장하는 함수
export const saveRecipe = () => {
    saveHistory.push({
        userQuestions,
        chatbotAnswers,
        len: saveHistory.length
    });
    localStorage.setItem("saveHistory", JSON.stringify(saveHistory));
};
