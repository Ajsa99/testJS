async function main() {
  const root = document.getElementById("root");
  const res = await fetch("https://catfact.ninja/breeds");

  const data = await res.json();
  data.data.forEach((obj) => {
    div = document.createElement("div");
    div.style.width = "400px";
    div.style.border = "2px solid gray";
    div.style.margin = "10px";

    title = document.createElement("p");
    title.innerText = obj.breed;

    title2 = document.createElement("p");
    title2.innerText = obj.country;

    title3 = document.createElement("p");
    title3.innerText = obj.origin;

    title4 = document.createElement("p");
    title4.innerText = obj.coat;

    title5 = document.createElement("p");
    title5.innerText = obj.pattern;

    div.appendChild(title);
    div.appendChild(title2);
    div.appendChild(title3);
    div.appendChild(title4);
    div.appendChild(title5);
    root.appendChild(div);
  });
}

main();
