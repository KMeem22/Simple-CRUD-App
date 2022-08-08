//Multirelation Query 1
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/multiretion_1")
    .then((response) => response.json())
    .then((data) => loadMultirelation_1HTMLTable(data["data"]));
});

function loadMultirelation_1HTMLTable(data) {
  const MTable = document.querySelector("#multi1_table tbody");

  let M_html = "";

  data.forEach(function ({ studio }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${studio}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  MTable.innerHTML = M_html;
  //console.log(MTable);
}

//Multirelation Query 2
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/multirelation_2")
    .then((response) => response.json())
    .then((data) => loadMultirelation_2HTMLTable(data["data"]));
});

function loadMultirelation_2HTMLTable(data) {
  const aTable = document.querySelector("#multi2_table tbody");

  let M_html = "";

  data.forEach(function ({ actor }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${actor}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  aTable.innerHTML = M_html;
  console.log(aTable);
}

//Multirelation Query 3
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/multirelation_3")
    .then((response) => response.json())
    .then((data) => loadMultirelation_3HTMLTable(data["data"]));
});

function loadMultirelation_3HTMLTable(data) {
  const rTable = document.querySelector("#multi3_table tbody");

  let M_html = "";

  data.forEach(function ({ movietitle, year, budget, gross }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${year}</td>`;
    M_html += `<td>${budget}</td>`;
    M_html += `<td>${gross}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  rTable.innerHTML = M_html;
  console.log(rTable);
}
