import fs from "fs";
import OpenAI from "openai";
import "dotenv/config"

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY} );
async function main() {
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream("/path/to/file"),
        model: "whisper-1",
    });

    console.log(transcription.text);
}
main();
asd
un cambio que quiero revisar y que no tengo en local
