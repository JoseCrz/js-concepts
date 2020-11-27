const textHiglighter = (strings, ...values) => {
  let formatedText = "";

  strings.forEach((string, index) => {
    const higlightedWord = values[index]
      ? `<strong>${values[index]}</strong>`
      : "";
    formatedText += `${string}${higlightedWord}`;
  });

  return `<p>${formatedText}</p>`;
};

const name = "Jose";
const job = "Frontend Developer";

const higlightedText = textHiglighter`My name is ${name}, I'm a ${job} from ${"México"}.`;

document.querySelector("body").innerHTML = higlightedText;
