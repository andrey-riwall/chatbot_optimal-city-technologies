import type { Message, Messages } from "@/types/ChatTypes";
import answers from "../chatbot/answers.json";

export function chatbotLogics(value: string): Messages {
  if (!value) {
    return menuMessage(answers.greetings, 0);
  }
  // eslint-disable-next-line
  // @ts-ignore
  const answer: string = answers.answers[value];
  const botAnswers: Messages = [];
  if (answer) {
    botAnswers.push({
      value: answer,
      author: false,
      button: false,
      delayCount: 0,
    });
  } else {
    botAnswers.push({
      value: answers.error,
      author: false,
      button: false,
      delayCount: 0,
    });
  }
  menuMessage(answers.default, 1).forEach((el: Message) => {
    botAnswers.push(el);
  });
  return botAnswers;
}

interface Answer {
  value: string;
  buttons: string[];
}

function menuMessage(option: Answer, place: number): Messages {
  const botAnswers = [];
  botAnswers.push({
    value: option.value,
    author: false,
    button: false,
    delayCount: place,
  });
  option.buttons.forEach((el: string, index: number) => {
    botAnswers.push({
      value: el,
      author: false,
      button: true,
      delayCount: index + place + 1,
    });
  });

  return botAnswers;
}
