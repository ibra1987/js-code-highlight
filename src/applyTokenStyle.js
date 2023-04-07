import { jsKeywords, jsTokens } from "../assets";

export default function applyTokenStyle(code) {
  jsTokens.map((token) => {
    if (code.includes(token)) {
      code = code.replace(token, "<span class='token'>" + token + "</span>");
    }
  });
  jsKeywords.map((keyword) => {
    if (code.includes(keyword)) {
      code = code.replace(
        keyword,
        "<span class='keyword'>" + keyword + "</span>"
      );
    }
  });

  return code;
}
