const render = (component, container) => {
  container.innerHTML = component;
};

// const Title = styled("h1");

const tags = ["h1", "h2", "p"];

const createStyled = (tags) => {
  const arrayOfFuncs = tags.map((tag) => {
    return [
      tag,
      (styles) => {
        const emptyTag = `<${tag} style="${styles}">||</${tag}>`.split("||");

        return (content) => `
          ${emptyTag[0]}
          ${content}
          ${emptyTag[1]}
      `;
      },
    ];
  });

  const entries = new Map(arrayOfFuncs);

  return Object.fromEntries(entries);
};

const styled = createStyled(tags);
const Title = styled.h1`
  color: red;
`;

console.log(Title);

// console.log(styled.h1);
// console.log(styled.h1());
// const styled = {
//   h1: (styles) => {
//     return (content) => `
//       <h1 style="${styles}">${content}</h1>
//     `;
//   },
// };

// const Title = styled.h1`
//   color: teal;
// `;

// const P = emotion("p")`Hello`;

// render(Title("Mimi bebe"), document.querySelector("#container"));
// render(P, document.querySelector("#container"));
