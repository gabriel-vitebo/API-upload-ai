import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/getAllPrompts";
import { uploadVideoRoutes } from "./routes/uploadVideo";
import { createTranscriptionRoute } from "./routes/createTranscription";

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP serve running on port 3333')
})