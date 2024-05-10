import app from "./server.js";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
