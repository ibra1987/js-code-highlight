import { jsKeywords, jsTokens } from "../assets";
class Lexer {
  constructor(source) {
    this.source = source;
    this.origin = source;
  }

  removeSpace() {
    while (this.source[0] === " ") {
      this.source = this.source.trimStart();
    }
    this.source = this.source
      .split(" ")
      .filter((each) => each.length >= 0 && each.trim());
    return this.source;
  }

  tokenize() {
    if (this.source.length === 0) {
      return null;
    }
    this.source = this.removeSpace();
    let result = {
      keywords: [],
      tokens: [],
    };

    jsKeywords.map((keyword) => {
      this.source.map((each) => {
        if (each.includes(keyword)) {
          result.keywords.push(keyword);
        }
      });
    });
    jsTokens.map((token) => {
      this.source.map((str) => {
        if (str.includes(token)) {
          result.tokens.push(token);
        }
      });
    });
    console.log(result);
    return result;
  }

  parse() {
    const result = this.tokenize();
    //this.source = this.source.join(" ");
    if (result !== null) {
      result.keywords.map(
        (keyword) =>
          (this.origin = this.origin.replaceAll(
            keyword,
            `<span class="keyword">${keyword}</span>`
          ))
      );
      result.tokens.map((token) => {
        if (token.trim() === "{") {
          this.origin = this.origin.replaceAll(
            token,
            `<span class="token">${token}</span>`
          );
        } else if (token.trim() === "}") {
          this.origin = this.origin.replaceAll(
            token,
            `<span class="token">${token}</span><br> `
          );
        } else {
          this.origin = this.origin.replaceAll(
            `<span class="token">${token}</span>`
          );
        }
      });
    }

    return this.origin;
  }
}

export default Lexer;
