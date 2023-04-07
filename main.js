import "./style.css";
import Lexer from "./src/Lexer";
import applyBasicStyle from "./src/applyBasicStyle";

document.addEventListener("DOMContentLoaded", async () => {
  const code_containers = document.getElementsByClassName("code-js");
  if (!code_containers) {
    return;
  }
  const code_containers_arr = [...code_containers];

  applyBasicStyle(code_containers_arr);
  code_containers_arr.map((code_div) => {
    let code = code_div.innerHTML;
    const lexer = new Lexer(code);

    const parsedCode = lexer.parse();

    code_div.innerHTML = parsedCode;
  });
});
