import "./style.css";

import applyBasicStyle from "./applyBasicStyle";
import applyTokenStyle from "./applyTokenStyle";
import lexer from "./lexer";

document.addEventListener("DOMContentLoaded", async () => {
  const code_containers = document.getElementsByClassName("code-js");
  if (!code_containers) {
    return;
  }
  const code_containers_arr = [...code_containers];

  applyBasicStyle(code_containers_arr);
  code_containers_arr.map((code_div) => {
    let code = code_div.innerHTML;

    let fcode = applyTokenStyle(code);
    code_div.innerHTML = fcode;
  });
});
