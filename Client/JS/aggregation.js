document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/count_rows")
    .then((response) => response.json())
    .then((data) => aggregation_result(data["data"]));
});

function aggregation_result(data) {
  console.log(data);
  const count = document.createElement("h3");
  console.log(count);
  count.innerHTML = data;

  const count_result = document.getElementById("count_r");
  count_result.appendChild(count);
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/grouping")
    .then((response) => response.json())
    .then((data) => loadgrouping_HTMLTable(data["data"]));
});

function loadgrouping_HTMLTable(data) {
  const gTable = document.querySelector("#group_table tbody");
  let M_html = "";

  data.forEach(function ({ movietitle, budget, gross }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${budget}</td>`;
    M_html += `<td>${gross}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  gTable.innerHTML = M_html;
  console.log(gTable);
}
