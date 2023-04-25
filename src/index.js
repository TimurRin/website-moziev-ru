import express from "express";
import cors from "cors";
import config from "./config.js";
import routes from "./route.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = config.PROD_PORT;

app.use(cors());

app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(routes);

app.listen(port, () => {
  console.log(`MOZIEV.RU is ready and listens to port ${port}`);
});
