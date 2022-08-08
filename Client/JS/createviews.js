document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/view")
    .then((response) => response.json())
    .then((data) => create_view_result(data["data"]));
});

function create_view_result(data) {
  const MTable = document.querySelector("#create_view_table tbody");
  let M_html = "";

  data.forEach(function ({ actor }) {
    M_html += "<tbody>";
    M_html += "<tr>";
    M_html += `<td>${actor}</td>`;
    M_html += "</tr>";
    M_html += "</tbody>";
  });

  MTable.innerHTML = M_html;
}
