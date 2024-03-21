const demo = document.getElementsByTagName("div")[0];
console.log("demo", demo);

const header = document.createElement("div");
header.innerHTML = "HEADER";
header.setAttribute(
  "style",
  "    background-color: red;color: white;height: 100px;display: flex;align-items: center;justify-content: center;font-size: 20px; "
);
demo.appendChild(header);

const firstDiv = document.createElement("div");
firstDiv.setAttribute("style", "display: flex;");
demo.appendChild(firstDiv);

const asside = document.createElement("div");
asside.innerHTML = "ASSIDE";
asside.setAttribute(
  "style",
  "background-color: yellow; color: red;display: flex;align-items: center;justify-content: center;font-size: 20px;height: 64vh;width: 50%;"
);
firstDiv.appendChild(asside);

const secondDiv = document.createElement("div");
firstDiv.appendChild(secondDiv);

const secA = document.createElement("div");
secA.innerHTML = "SECTION A";
secA.setAttribute(
  "style",
  "background-color: green;color: white;width: 100%;display: flex;align-items: center;justify-content: center;font-size: 20px;height: 32vh;"
);
secondDiv.appendChild(secA);

const secB = document.createElement("div");
secB.innerHTML = "SECTION B";
secB.setAttribute(
  "style",
  "background-color: blue;color: white; width: 50vw;display: flex;  align-items: center;justify-content: center;font-size: 20px;  height: 32vh;"
);
secondDiv.appendChild(secB);

const footer = document.createElement("div");
footer.innerHTML = "FOOTER";
footer.setAttribute(
  "style",
  "   background-color: black;color: white;  display: flex;  align-items: center;  justify-content: center;  font-size: 20px;  height: 100px; "
);
demo.appendChild(footer);
