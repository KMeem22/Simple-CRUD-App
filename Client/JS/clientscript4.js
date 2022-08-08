document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getActors")
    .then((response) => response.json())
    .then((actordata) => loadStudioHTMLTable(actordata["data"]));
});

document
  .querySelector("#actor_table tbody")
  .addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.dataset.id);

    if (event.target.className === "actor_Delete_rowbtn") {
      DeleteRowByID(event.target.dataset.id);
    }
    if (event.target.className === "actor_Edit_rowbtn") {
      updateActorRow(event.target.dataset.id);
    }
  });

//Search button
const search_act_btn = document.querySelector("#search_actor_btn");
console.log(search_act_btn);

//Submit button
const actbtn = document.querySelector("#Submit_Act_Btn");
console.log(actbtn);

/*** Search ***/
search_act_btn.onclick = function () {
  const search_input_actor = document.querySelector(
    "#search_actor_input"
  ).value;
  // console.log(search_input_value);

  fetch("http://localhost:5000/searchactor/" + search_input_actor)
    .then((response) => response.json())
    .then((actordata) => loadStudioHTMLTable(actordata["data"]));

  //console.log(loadReviewHTMLTable(data["data"]));
};

/*** Delete ***/
function DeleteRowByID(id) {
  fetch("http://localhost:5000/deleteActor/" + id, {
    headers: {
      "Content-type": "application/json",
    },

    method: "DELETE",
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
}

//Update buttons
const up_act_btn1 = document.querySelector("#Up_Actor_Btn1");
console.log(up_act_btn1);

const up_act_btn2 = document.querySelector("#Up_Actor_Btn2");
console.log(up_act_btn2);

const up_act_btn3 = document.querySelector("#Up_Actor_Btn3");
console.log(up_act_btn3);

const up_act_btn4 = document.querySelector("#Up_Actor_Btn4");
console.log(up_act_btn4);

function updateActorRow(id) {
  const up_act_row = document.querySelector("#update_actor_row");
  up_act_row.hidden = false;

  document.querySelector("#update_actor_name").dataset.id = id;
  document.querySelector("#update_actor_age").dataset.id = id;
  document.querySelector("#update_actor_salary").dataset.id = id;
  document.querySelector("#update_actor_gender").dataset.id = id;
}

up_act_btn1.addEventListener("click", function (ev) {
  ev.preventDefault();
  const up_actor = document.querySelector("#update_actor_name");

  fetch("http://localhost:5000/updateActor_data1", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_actor.dataset.id,
      actor: up_actor.value,
    }),
  })
    .then((response) => response.json())
    .then((actordata) => {
      if (actordata.success) {
        location.reload();
      }
    });
});

up_act_btn2.addEventListener("click", function (ev) {
  ev.preventDefault();
  const up_age = document.querySelector("#update_actor_age");

  fetch("http://localhost:5000/updateActor_data2", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_age.dataset.id,
      age: up_age.value,
    }),
  })
    .then((response) => response.json())
    .then((actordata) => {
      if (actordata.success) {
        location.reload();
      }
    });
});

up_act_btn3.addEventListener("click", function (ev) {
  ev.preventDefault();
  const up_salary = document.querySelector("#update_actor_salary");

  fetch("http://localhost:5000/updateActor_data3", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_salary.dataset.id,
      salary: up_salary.value,
    }),
  })
    .then((response) => response.json())
    .then((actordata) => {
      if (actordata.success) {
        location.reload();
      }
    });
});

up_act_btn4.addEventListener("click", function (ev) {
  ev.preventDefault();
  const up_gender = document.querySelector("#update_actor_gender");

  fetch("http://localhost:5000/updateActor_data4", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_gender.dataset.id,
      gender: up_gender.value,
    }),
  })
    .then((response) => response.json())
    .then((actordata) => {
      if (actordata.success) {
        location.reload();
      }
    });
});

// var i = 0;
// var id = i + 1;
//var id = 0;

actbtn.onclick = (ev) => {
  ev.preventDefault();

  //var id = 0;
  const movietitle_input = document.querySelector("#mp");
  const movietitle = movietitle_input.value;
  movietitle_input.value = "";

  const actor_input = document.querySelector("#actor_name");
  const actor = actor_input.value;
  actor_input.value = "";

  const age_input = document.querySelector("#actor_age");
  const age = age_input.value;
  age_input.value = "";

  const salary_input = document.querySelector("#actor_salary");
  const salary = salary_input.value;
  salary_input.value = "";

  const gender_input = document.querySelector("#actor_gender");
  const gender = gender_input.value;
  gender_input.value = "";

  const actor_obj = {
    id: id,
    movietitle: movietitle,
    actor: actor,
    age: age,
    salary: salary,
    gender: gender,
  };

  fetch("http://localhost:5000/inserActorsT", {
    headers: {
      "Content-type": "application/json",
    },

    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      id: id,
      movietitle: movietitle,
      actor: actor,
      age: age,
      salary: salary,
      gender: gender,
    }),
  })
    .then((response) => response.json())
    .then((result) =>
      console.log(result.body(insertRowInto_actor_table(actor_obj)))
    );
};

function insertRowInto_actor_table(actor_obj) {
  var id = 0;
  const movie_tbl = document.querySelector("#actor_table tbody");
  const check_movie_data = movie_tbl.querySelector(".no-data");

  let movie_html = "<tr>";

  for (var m_key in actor_obj) {
    if (actor_obj.hasOwnProperty(m_key)) {
      movie_html += `<td>${actor_obj[m_key]}</td>`;
    }
  }

  movie_tbl += `<td><button class="actor_Delete_rowbtn" data-id=${actor_obj.id}>Delete</td>`;
  movie_tbl += `<td><button class="actor_Edit_rowbtn" data-id=${actor_obj.id}>Edit</td>`;

  movie_html += "</tr>";

  if (check_movie_data) {
    movie_tbl.innerHTML = movie_html;
  } else {
    const new_row_movie = movie_tbl.insertRow();
    new_row_movie.innerHTML = movie_html;
  }
}

var id = 0;
//var id = i + 1;

function loadStudioHTMLTable(actordata) {
  var id = 0;
  const MTable = document.querySelector("#actor_table tbody");

  if (actordata.length === 0) {
    MTable.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
    return;
  }

  let M_html = "";

  actordata.forEach(function ({ id, movietitle, actor, age, salary, gender }) {
    M_html += "<tr>";
    M_html += `<td>${id}</td>`;
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${actor}</td>`;
    M_html += `<td>${age}</td>`;
    M_html += `<td>${salary}</td>`;
    M_html += `<td>${gender}</td>`;
    M_html += `<td><button class="actor_Delete_rowbtn" data-id=${id}>Delete</td>`;
    M_html += `<td><button class="actor_Edit_rowbtn" data-id=${id}>Edit</td>`;
    M_html += "</tr>";
  });

  MTable.innerHTML = M_html;
}
