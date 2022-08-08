//DOM content for Client script
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getStudio")
    .then((response) => response.json())
    .then((studiodata) => loadStudioHTMLTable(studiodata["data"]));
});

document
  .querySelector("#studio_table tbody")
  .addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.dataset.id);

    if (event.target.className === "studio_Delete_rowbtn") {
      DeleteRowByID(event.target.dataset.id);
    }
    if (event.target.className === "studio_Edit_rowbtn") {
      updateStudio_Row(event.target.dataset.id);
    }
  });

//Search button
const search_std_btn = document.querySelector("#search_studio_btn");
console.log(search_std_btn);

//Udate button
const up_std_btn0 = document.querySelector("#Up0_Submit_StudioBtn");
console.log(up_std_btn0);

const up_std_btn1 = document.querySelector("#Up1_Submit_StudioBtn");
console.log(up_std_btn1);

const up_std_btn2 = document.querySelector("#Up2_Submit_StudioBtn");
console.log(up_std_btn2);

//Submit button
const std_btn = document.querySelector("#Submit_StudioBtn");
console.log(std_btn);

/*** Search ***/
search_std_btn.onclick = function () {
  const search_input_studio = document.querySelector(
    "#search_studio_input"
  ).value;
  // console.log(search_input_value);

  fetch("http://localhost:5000/searchStudio/" + search_input_studio)
    .then((response) => response.json())
    .then((studiodata) => loadStudioHTMLTable(studiodata["data"]));

  //console.log(loadReviewHTMLTable(data["data"]));
};

/*** Delete ***/
function DeleteRowByID(id) {
  fetch("http://localhost:5000/deleteStudio/" + id, {
    headers: {
      "Content-type": "application/json",
    },

    method: "DELETE",
  })
    .then((response) => response.json())
    .then((studiodata) => {
      if (studiodata.success) {
        location.reload();
      }
    });
}

var id = 0;
// var id = i + 1;

function updateStudio_Row(id) {
  up_std_row = document.querySelector("#update_studio_row");
  up_std_row.hidden = false;

  document.querySelector("#update_movietitle").dataset.id = id;
  document.querySelector("#update_studio_name").dataset.id = id;
  document.querySelector("#update_studio_manager").dataset.id = id;
}

up_std_btn2.addEventListener("click", function (ev) {
  ev.preventDefault();
  //const up_studio = document.querySelector("#update_studio_name");
  const up_manager = document.querySelector("#update_studio_manager");

  //const std_up_manager = up_manager.innerHTML;
  console.log(up_manager);

  //console.log(up_name);
  fetch("http://localhost:5000/updateStudio_data2", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_manager.dataset.id,
      manager: up_manager.value,
    }),
  })
    .then((response) => response.json())
    .then((studiodata) => {
      if (studiodata.success) {
        location.reload();
      }
    });
});

up_std_btn1.addEventListener("click", function (ev) {
  ev.preventDefault();
  const up_studio = document.querySelector("#update_studio_name");
  //const up_manager = document.querySelector("#update_studio_manager");

  //console.log(up_name);
  fetch("http://localhost:5000/updateStudio_data1", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_studio.dataset.id,
      studio: up_studio.value,
    }),
  })
    .then((response) => response.json())
    .then((studiodata) => {
      if (studiodata.success) {
        location.reload();
      }
    });
});

up_std_btn0.onclick = (ev) => {
  ev.preventDefault();

  const up_movietitle = document.querySelector("#update_movietitle");

  fetch("http://localhost:5000/updateStudio_data0", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_movietitle.dataset.id,
      movietitle: up_movietitle.value,
    }),
  })
    .then((response) => response.json())
    .then((studiodata) => {
      if (studiodata.success) {
        location.reload();
      }
    });
};

//Submit
std_btn.onclick = (ev) => {
  ev.preventDefault();

  const movietitle_input = document.querySelector("#lichi");
  const movietitle = movietitle_input.value;
  movietitle_input.value = "";

  const studio_input = document.querySelector("#studio_name");
  const studio = studio_input.value;
  studio_input.value = "";

  const manager_input = document.querySelector("#studio_manager");
  const manager = manager_input.value;
  manager_input.value = "";

  const studio_obj = {
    id: id,
    movietitle: movietitle,
    studio: studio,
    manager: manager,
  };

  fetch("http://localhost:5000/insertStudio", {
    headers: {
      "Content-type": "application/json",
    },

    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      id: id,
      movietitle: movietitle,
      studio: studio,
      manager: manager,
    }),
  })
    .then((response) => response.json())
    .then((result) =>
      console.log(result.body(insertRowInto_studio_table(studio_obj)))
    );
};

function insertRowInto_studio_table(studio_obj) {
  const movie_tbl = document.querySelector("#studio_table tbody");
  const check_movie_data = movie_tbl.querySelector(".no-data");

  let movie_html = "<tr>";

  for (var m_key in studio_obj) {
    if (studio_obj.hasOwnProperty(m_key)) {
      movie_html += `<td>${studio_obj[m_key]}</td>`;
    }
  }

  movie_tbl += `<td><button class="studio_Delete_rowbtn" data-id=${studio_obj.id}>Delete</td>`;
  movie_tbl += `<td><button class="studio_Edit_rowbtn" data-id=${studio_obj.id}>Edit</td>`;

  movie_html += "</tr>";

  if (check_movie_data) {
    movie_tbl.innerHTML = movie_html;
  } else {
    const new_row_movie = movie_tbl.insertRow();
    new_row_movie.innerHTML = movie_html;
  }
}

function loadStudioHTMLTable(studiodata) {
  const MTable = document.querySelector("#studio_table tbody");

  if (studiodata.length === 0) {
    MTable.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
    return;
  }

  let M_html = "";

  studiodata.forEach(function ({ id, movietitle, studio, manager }) {
    M_html += "<tr>";
    M_html += `<td>${id}</td>`;
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${studio}</td>`;
    M_html += `<td>${manager}</td>`;
    M_html += `<td><button class="studio_Delete_rowbtn" data-id=${id}>Delete</td>`;
    M_html += `<td><button class="studio_Edit_rowbtn" data-id=${id}>Edit</td>`;
    M_html += "</tr>";
  });

  MTable.innerHTML = M_html;
}
