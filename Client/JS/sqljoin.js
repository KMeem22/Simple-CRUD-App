document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/join1")
    .then((response) => response.json())
    .then((data) => loadjoin1HTMLTable(data["data"]));
});

function loadjoin1HTMLTable(data) {
  const MTable = document.querySelector("#join1_table tbody");

  let M_html = "";

  data.forEach(function ({ movietitle, director, year, actor, gender }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${director}</td>`;
    M_html += `<td>${year}</td>`;
    M_html += `<td>${actor}</td>`;
    M_html += `<td>${gender}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  MTable.innerHTML = M_html;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/join2")
    .then((response) => response.json())
    .then((data) => loadjoin2HTMLTable(data["data"]));
});

function loadjoin2HTMLTable(data) {
  const MTable = document.querySelector("#join2_table tbody");
  let M_html = "";

  data.forEach(function ({ movietitle, year, budget, gross, studio, manager }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${year}</td>`;
    M_html += `<td>${budget}</td>`;
    M_html += `<td>${gross}</td>`;
    M_html += `<td>${studio}</td>`;
    M_html += `<td>${manager}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  MTable.innerHTML = M_html;
}
