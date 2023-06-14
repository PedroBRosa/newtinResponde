import axios from "axios";
import { CHAT_GPT_TOKEN } from "@env";

export default async function sendMessageToChatGPT(message) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHAT_GPT_TOKEN}`,
        },
      }
    );
    
    const reply = response.data.choices[0].message.content;
    return reply;

  } catch (error) {
    console.error("Erro ao enviar mensagem para o ChatGPT", error);
    throw error;
  }
}
