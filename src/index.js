import { createRoot } from "react-dom/client";
const root = document.getElementById('root')
import { Textearia } from "./components/textearia";

const app = createRoot(root)

app.render(
    <Textearia/>
)

