import jsSymbols from "./assets";

export default function lexer(source) {
  let len = source.length;
  let matchedTokens = [];
  if (!len > 0) return;

  for (let i = 0; i < len; i++) {
    if (jsSymbols.indexOf(source[i] > -1)) {
      if (source[i] === "(" || source[i] === ")") {
        source[i] = "\\" + source[i];
      }
      matchedTokens.push(source[i]);
    }
  }
  return matchedTokens;
}
