//DOM content for Client script
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getAllmovie")
    .then((response) => response.json())
    .then((moviedata) => loadMovieHTMLTable(moviedata["data"]));
});

document
  .querySelector("table tbody")
  .addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.dataset.id);

    if (event.target.className === "Movie_Delete_rowbtn") {
      DeleteRowByID(event.target.dataset.id);
    }

    if (event.target.className === "Movie_Edit_rowbtn") {
      updateMovieRow(event.target.dataset.id);
    }
  });

var id = 0;

//Search button
const search_moviebtn = document.querySelector("#search_movie_btn");
console.log(search_moviebtn);

//Update button
const up_movie_btn0 = document.querySelector("#update_row_btn0");
console.log(up_movie_btn0);

const up_movie_btn1 = document.querySelector("#update_row_btn1");
console.log(up_movie_btn1);

const up_movie_btn2 = document.querySelector("#update_row_btn2");
console.log(up_movie_btn2);

const up_movie_btn3 = document.querySelector("#update_row_btn3");
console.log(up_movie_btn3);

const up_movie_btn4 = document.querySelector("#update_row_btn4");
console.log(up_movie_btn4);

const up_movie_btn5 = document.querySelector("#update_row_btn5");
console.log(up_movie_btn5);

const up_movie_btn6 = document.querySelector("#update_row_btn6");
console.log(up_movie_btn6);

//Submit button
const Movie_add_btn = document.querySelector("#SubmitAdd_1Btn");
console.log(Movie_add_btn);

/*** Search ***/
search_moviebtn.onclick = function () {
  const search_input_movie = document.querySelector(
    "#search_movie_input"
  ).value;
  // console.log(search_input_value);

  fetch("http://localhost:5000/searchmovie/" + search_input_movie)
    .then((response) => response.json())
    .then((moviedata) => loadMovieHTMLTable(moviedata["data"]));

  //console.log(loadReviewHTMLTable(data["data"]));
};

/*** Delete ***/
function DeleteRowByID(id) {
  fetch("http://localhost:5000/deletemovie_data/" + id, {
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

/*** Update ***/
function updateMovieRow(id) {
  const update_movie_row = document.querySelector("#update_movie_row");
  update_movie_row.hidden = false;

  //document.querySelector("#update_row_btn").dataset.id = id;
  document.querySelector("#update_movietitle").dataset.id = id;
  document.querySelector("#update_year").dataset.id = id;
  document.querySelector("#update_director").dataset.id = id;
  document.querySelector("#update_length").dataset.id = id;
  document.querySelector("#update_MovieType").dataset.id = id;
  document.querySelector("#update_budget").dataset.id = id;
  document.querySelector("#update_gross").dataset.id = id;
}

up_movie_btn0.onclick = (ev) => {
  ev.preventDefault();

  const up_movietitle = document.querySelector("#update_movietitle");

  fetch("http://localhost:5000/update_movie_data0", {
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
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

up_movie_btn1.onclick = (ev) => {
  ev.preventDefault();
  const up_year = document.querySelector("#update_year");
  fetch("http://localhost:5000/update_movie_data1", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_year.dataset.id,
      year: up_year.value,
    }),
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

up_movie_btn2.onclick = (ev) => {
  ev.preventDefault();

  const up_director = document.querySelector("#update_director");

  fetch("http://localhost:5000/update_movie_data2", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_director.dataset.id,
      director: up_director.value,
    }),
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

up_movie_btn3.onclick = (ev) => {
  ev.preventDefault();

  const up_length = document.querySelector("#update_length");

  fetch("http://localhost:5000/update_movie_data3", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_length.dataset.id,
      length: up_length.value,
    }),
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

up_movie_btn4.onclick = (ev) => {
  ev.preventDefault();

  const up_genre = document.querySelector("#update_MovieType");

  fetch("http://localhost:5000/update_movie_data4", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_genre.dataset.id,
      genre: up_genre.value,
    }),
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

up_movie_btn5.onclick = (ev) => {
  ev.preventDefault();

  const up_budget = document.querySelector("#update_budget");

  fetch("http://localhost:5000/update_movie_data5", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_budget.dataset.id,
      budget: up_budget.value,
    }),
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

up_movie_btn6.onclick = (ev) => {
  ev.preventDefault();

  const up_gross = document.querySelector("#update_gross");

  fetch("http://localhost:5000/update_movie_data6", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_gross.dataset.id,
      gross: up_gross.value,
    }),
  })
    .then((response) => response.json())
    .then((moviedata) => {
      if (moviedata.success) {
        location.reload();
      }
    });
};

// Update_movie_btn.onclick = (ev) => {
//   ev.preventDefault();

//   const up_movietitle = document.querySelector("#update_movietitle");
//   const up_year = document.querySelector("#update_year");
//   const up_director = document.querySelector("#update_director");
//   const up_length = document.querySelector("#update_length");
//   const up_genre = document.querySelector("#update_MovieType");
//   const up_budget = document.querySelector("#update_budget");
//   const up_gross = document.querySelector("#update_gross");

//   //console.log(up_name);
//   fetch("http://localhost:5000/update_movie_data1", {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     mode: "cors",
//     body: JSON.stringify({
//       id: up_movietitle.dataset.id,
//       movietitle: up_movietitle.value,
//       year: up_year.value,
//       director: up_director.value,
//       length: up_length.value,
//       genre: up_genre.value,
//       budget: up_budget.value,
//       gross: up_gross.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((moviedata) => {
//       if (moviedata.success) {
//         location.reload();
//       }
//     });
// };

/*** Post ***/
Movie_add_btn.onclick = (ev) => {
  ev.preventDefault();

  const movietitle_input = document.querySelector("#movietitle");
  const movietitle = movietitle_input.value;
  movietitle_input.value = "";

  const year_input = document.querySelector("#year");
  const year = year_input.value;
  year_input.value = "";

  const director_input = document.querySelector("#director");
  const director = director_input.value;
  director_input.value = "";

  const length_input = document.querySelector("#length");
  const length = length_input.value;
  length_input.value = "";

  const genre_input = document.querySelector("#MovieType");
  const genre = genre_input.value;
  genre.value = "";

  const budget_input = document.querySelector("#budget");
  const budget = budget_input.value;
  budget_input.value = "";

  const gross_input = document.querySelector("#gross");
  const gross = gross_input.value;
  gross_input.value = "";

  const movie_obj = {
    id: id,
    movietitle: movietitle,
    year: year,
    director: director,
    length: length,
    genre: genre,
    budget: budget,
    gross: gross,
  };

  fetch("http://localhost:5000/insertmovie", {
    headers: {
      "Content-type": "application/json",
    },

    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      id: id,
      movietitle: movietitle,
      year: year,
      director: director,
      length: length,
      genre: genre,
      budget: budget,
      gross: gross,
    }),
  })
    .then((response) => response.json())
    .then((result) =>
      console.log(result.body(insertRowInto_movie_table(movie_obj)))
    );
};

//console.log(movie_obj);

function insertRowInto_movie_table(movie_obj) {
  console.log(movie_obj);
  const movie_tbl = document.querySelector("table tbody");
  const check_movie_data = movie_tbl.querySelector(".no-data");

  let movie_html = "<tr>";

  for (var m_key in movie_obj) {
    if (movie_obj.hasOwnProperty(m_key)) {
      movie_html += `<td>${movie_obj[m_key]}</td>`;
    }
  }

  //var id = 0;
  movie_tbl += `<td><button class="Movie_Delete_rowbtn" data-id=${movie_obj.id}>Delete</td>`;
  movie_tbl += `<td><button class="Movie_Edit_rowbtn" data-id=${movie_obj.id}>Edit</td>`;

  movie_html += "</tr>";
  //console.log(review_tbl);

  if (check_movie_data) {
    movie_tbl.innerHTML = movie_html;
  } else {
    const new_row_movie = movie_tbl.insertRow();
    new_row_movie.innerHTML = movie_html;
  }
}

function loadMovieHTMLTable(moviedata) {
  const MTable = document.querySelector("table tbody");

  if (moviedata.length === 0) {
    MTable.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
    return;
  }

  let M_html = "";

  moviedata.forEach(function ({
    id,
    movietitle,
    year,
    director,
    length,
    genre,
    budget,
    gross,
  }) {
    M_html += "<tr>";
    M_html += `<td>${id}</td>`;
    M_html += `<td>${movietitle}</td>`;
    M_html += `<td>${year}</td>`;
    M_html += `<td>${director}</td>`;
    M_html += `<td>${length}</td>`;
    M_html += `<td>${genre}</td>`;
    M_html += `<td>${budget}</td>`;
    M_html += `<td>${gross}</td>`;
    M_html += `<td><button class="Movie_Delete_rowbtn" data-id=${id}>Delete</td>`;
    M_html += `<td><button class="Movie_Edit_rowbtn" data-id=${id}>Edit</td>`;
    M_html += "</tr>";
  });

  MTable.innerHTML = M_html;
}
