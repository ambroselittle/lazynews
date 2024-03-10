import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  console.log(process.env.OPENAI_API_KEY);
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
