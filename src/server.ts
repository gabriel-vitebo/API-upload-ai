import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/getAllPrompts";
import { uploadVideoRoutes } from "./routes/uploadVideo";

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP serve running on port 3333')
})