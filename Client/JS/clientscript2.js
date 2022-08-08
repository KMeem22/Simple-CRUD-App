//DOM content for Client script
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getAuthorInfo")
    .then((response) => response.json())
    .then((authordata) => loadAuthorHTMLTable(authordata["data"]));
});

document
  .querySelector("#author_table tbody")
  .addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.dataset.id);

    if (event.target.className === "rev_auth_Delete_rowbtn") {
      DeleteRowByID(event.target.dataset.id);
    }
    if (event.target.className === "rev_auth_Edit_rowbtn") {
      updateAuth_revRow(event.target.dataset.id);
    }
  });

//Search button
const search_auth_rev_btn = document.querySelector("#search_author_btn");
console.log(search_auth_rev_btn);

//Update button
// const up_auth_btn = document.querySelector("#up_author");
// console.log(up_auth_btn);

const up_rev_btn0 = document.querySelector("#Up0_Submit_AuthorBtn");
console.log(up_rev_btn0);

const up_rev_btn = document.querySelector("#Up1_Submit_AuthorBtn");
console.log(up_rev_btn);

//Submit button
const rev_btn = document.querySelector("#Submit_AuthorBtn");
console.log(rev_btn);

/*** Search ***/
search_auth_rev_btn.onclick = () => {
  const search_input_author = document.querySelector(
    "#search_author_input"
  ).value;
  // console.log(search_input_value);

  fetch("http://localhost:5000/searchAuthor_rev/" + search_input_author)
    .then((response) => response.json())
    .then((authordata) => loadAuthorHTMLTable(authordata["data"]));
};

var id = 0;
// var i = 0;
// var id = i + 1;

/*** Delete ***/
function DeleteRowByID(id) {
  fetch("http://localhost:5000/deleteAuth_rev_data/" + id, {
    headers: {
      "Content-type": "application/json",
    },

    method: "DELETE",
  })
    .then((response) => response.json())
    .then((authordata) => {
      if (authordata.success) {
        location.reload();
      }
    });
}

/*** Update ***/
function updateAuth_revRow(id) {
  const update_movie_row = document.querySelector("#update_review_row");
  update_movie_row.hidden = false;

  //document.querySelector("#update_name").dataset.id = id;
  document.querySelector("#update_Movie_Rating").dataset.id = id;
  document.querySelector("#update_movietitle").dataset.id = id;
}

// up_auth_btn.onclick = (ev) => {
//   ev.preventDefault();

//   const up_author = document.querySelector("#update_name");

//   fetch("http://localhost:5000/update_Authrev_authname", {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     mode: "cors",
//     body: JSON.stringify({
//       id: up_author.dataset.id,
//       author: up_author.value,
//       //author_name: up_author.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((authordata) => {
//       if (authordata.success) {
//         location.reload();
//       }
//     });
// };

up_rev_btn0.onclick = (ev) => {
  ev.preventDefault();

  const up_movietitle = document.querySelector("#update_movietitle");

  fetch("http://localhost:5000/update_Authrev_movititlte", {
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
    .then((authordata) => {
      if (authordata.success) {
        location.reload();
      }
    });
};

up_rev_btn.onclick = (ev) => {
  ev.preventDefault();

  const up_rating = document.querySelector("#update_Movie_Rating");

  fetch("http://localhost:5000/update_Authrev", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: up_rating.dataset.id,
      rating: up_rating.value,
      //rating_movie: up_rating.value,
    }),
  })
    .then((response) => response.json())
    .then((authordata) => {
      if (authordata.success) {
        location.reload();
      }
    });
};

/*** Post ***/
rev_btn.onclick = (ev) => {
  ev.preventDefault();

  const author_input = document.querySelector("#name");
  const author = author_input.value;
  author_input.value = "";

  const m_rev_input = document.querySelector("#mango");
  const movietitle = m_rev_input.value;
  m_rev_input.value = "";

  const rating_input = document.querySelector("#Movie_Rating");
  const rating = rating_input.value;
  rating_input.value = "";

  const rev_obj = {
    id: id,
    author: author,
    movietitle: movietitle,
    rating: rating,
    // author_name: author,
    // rating_movie: rating,
  };

  fetch("http://localhost:5000/insertauthor_review", {
    headers: {
      "Content-type": "application/json",
    },

    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      id: id,
      author: author,
      movietitle: movietitle,
      rating: rating,
      // author_name: author,
      // rating_movie: rating,
    }),
  })
    .then((response) => response.json())
    .then((result) =>
      console.log(result.body(insertRowInto_reviewAuth_table(rev_obj)))
    );
};

function insertRowInto_reviewAuth_table(rev_obj) {
  const rev_auth_table = document.querySelector("#author_table tbody");
  const check_rev_data = document.querySelector(".no_data");

  let rev_auth_html = "<tr>";

  for (var rev_key in rev_obj) {
    if (rev_obj.hasOwnProperty(rev_key)) {
      rev_auth_html += `<td>${rev_obj[rev_key]}</td>`;
    }
  }

  rev_auth_table += `<td><button class="rev_auth_Delete_rowbtn" data-id=${rev_obj.id}>Delete</td>`;
  rev_auth_table += `<td><button class="rev_auth_Edit_rowbtn" data-id=${rev_obj.id}>Edit</td>`;

  rev_auth_html += "</tr>";

  if (check_rev_data) {
    rev_auth_table.innerHTML = rev_auth_html;
  } else {
    const new_row_auth = rev_auth_table.insertRow();
    new_row_auth.innerHTML = rev_auth_html;
  }
}

function loadAuthorHTMLTable(authordata) {
  const Auth_Table = document.querySelector("#author_table tbody");

  if (authordata.length === 0) {
    Auth_Table.innerHTML =
      "<tr><td class='no_data' colspan='6'>No Data</td></tr>";
    return;
  }

  let Auth_html = "";

  authordata.forEach(function ({
    id,
    author,
    movietitle,
    rating,
    author_name,
    rating_movie,
  }) {
    Auth_html += "<tr>";
    Auth_html += `<td>${id}</td>`;
    Auth_html += `<td>${author}</td>`;
    Auth_html += `<td>${movietitle}</td>`;
    Auth_html += `<td>${rating}</td>`;
    // Auth_html += `<td>${author_name}</td>`;
    // Auth_html += `<td>${rating_movie}</td>`;
    Auth_html += `<td><button class="rev_auth_Delete_rowbtn" data-id=${id}>Delete</td>`;
    Auth_html += `<td><button class="rev_auth_Edit_rowbtn" data-id=${id}>Edit</td>`;
    Auth_html += "</tr>";
  });

  Auth_Table.innerHTML = Auth_html;
}
