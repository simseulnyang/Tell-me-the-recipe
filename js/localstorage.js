import { data } from "./data.js";
import { printHistory } from "./history.js";

let saveHistory = JSON.parse(localStorage.getItem("saveHistory"));

saveHistory = [];

let userQuestions, chatbotAnswers;

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
    console.log(userQuestions, chatbotAnswers);
    saveHistory.push({ userQuestions, chatbotAnswers });
    localStorage.setItem("saveHistory", JSON.stringify(saveHistory));

    printHistory();
};
