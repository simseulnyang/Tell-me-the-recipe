import { data } from "./data.js";
import { printAnswer } from "./display.js";
import { chatbotAnswer, saveRecipe } from "./localstorage.js";

// openAPI url
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// api 요청보내는 함수
export const apiPost = async () => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        redirect: "follow"
    })
        .then((res) => res.json())
        .then((res) => {
            printAnswer(res.choices[0].message.content);
            chatbotAnswer(res.choices[0].message.content);
            saveRecipe();
        })
        .catch((err) => {
            console.log(err);
        });
};
