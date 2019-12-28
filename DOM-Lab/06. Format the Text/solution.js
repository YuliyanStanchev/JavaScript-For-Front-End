function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  if (input === null || output === null) {
    throw new Error("Something is wrong...");
  }

  let sentences = input.innerHTML.split(".").filter(x => x !== "");
  for (let i = 0; i < sentences.length; i += 3) {
    let p = document.createElement("p");
    let str = "";
    for (let k = 0; k < 3; k++) {
      if (i + k < sentences.length) {
        str += sentences[i + k] + ".";
      }
    }
    p.innerHTML = str;
    output.appendChild(p);
  }
}