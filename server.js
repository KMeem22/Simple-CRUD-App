const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "env.default" });

const connection = require("./Database/db");

/***************
 * Movie Table *
 ***************/
const Movie_data = require("./Database/movieDbService");
const { request, response } = require("express");

/***************
 * Review Table *
 ***************/
const rev_data = require("./Database/authorDBService");
console.log(rev_data);

/***************
 * Studio Table *
 ***************/
const std_data = require("./Database/studioDBService");

/***************
 * Actor Table *
 ***************/
const actor_data = require("./Database/actorDBService");
console.log(actor_data);

/********************
 * Five SQL Queries *
 ********************/
const queries = require("./Database/queriesDBService");

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

//create
app.post("/insertmovie", (request, response) => {
  /*** Create Movie table ****/
  const { id, movietitle, year, director, length, genre, budget, gross } =
    request.body;

  const movie_db = Movie_data.getmovieDbServiceInstance();
  const movie_post = movie_db.insertmovieData(
    id,
    movietitle,
    year,
    director,
    length,
    genre,
    budget,
    gross
  );

  movie_post
    .then((movie_data) => response.json({ data: movie_data }))
    .catch((err) => console.log(err));
});

app.post("/insertauthor_review", (request, response) => {
  /*** Create Review table ****/
  console.log("author table");

  const { id, author, movietitle, rating } = request.body;

  const author_db = rev_data.getauthorDBServiceInstance();
  const author_post = author_db.insertAuthore_revData(
    id,
    author,
    movietitle,
    rating
  );

  author_post
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

app.post("/insertStudio", (request, response) => {
  /*** Create Studio table ****/

  const { id, movietitle, studio, manager } = request.body;

  const std_db = std_data.getstudioDBServiceInstance();
  const std_post = std_db.insertStudio_Data(id, movietitle, studio, manager);

  std_post
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

app.post("/inserActorsT", (request, response) => {
  const { id, movietitle, actor, age, salary, gender } = request.body;
  const act_db_table = actor_data.getactorDBServiceInstance();
  const actor_post = act_db_table.insertActorData(
    id,
    movietitle,
    actor,
    age,
    salary,
    gender
  );

  actor_post
    .then((actordata) => response.json({ data: actordata }))
    .catch((err) => console.log(err));
});

//read;
app.get("/getAllmovie", (request, response) => {
  console.log("movie");
  const getAllmovie_db = Movie_data.getmovieDbServiceInstance();
  const movieTable = getAllmovie_db.getAllmovieData();
  movieTable
    .then((movie_data) => response.json({ data: movie_data }))
    .catch((err) => console.log(err));
});

app.get("/getAuthorInfo", (request, response) => {
  console.log("review");
  const getAllauthor_db = rev_data.getauthorDBServiceInstance();
  const reviewTable = getAllauthor_db.getallAuthor_revData();

  reviewTable
    .then((authordata) => response.json({ data: authordata }))
    .catch((err) => console.log(err));
});

app.get("/getStudio", (request, response) => {
  console.log("studio");
  const getStd_db = std_data.getstudioDBServiceInstance();
  const std_table = getStd_db.getallStudio_Data();

  std_table
    .then((std_data) => response.json({ data: std_data }))
    .catch((err) => console.log(err));
  //console.log(std_table);
});

app.get("/getActors", (request, response) => {
  console.log("actors");
  const getactor_db = actor_data.getactorDBServiceInstance();
  const actor_table = getactor_db.getAllactordata();

  actor_table
    .then((actordata) => response.json({ data: actordata }))
    .catch((err) => console.log(err));

  //console.log(actor_table);
});

// app.get("/getActors", (request, response) => {
//   console.log("actors");
//   const getAct_db = actor_data.getactorDBServiceInstance();
//   const act_table = getAct_db.getAllactordata();

//   act_table
//     .then((actordata) => response.json({ data: actordata }))
//     .catch((err) => console.log(err));
// });

//update in movie table
app.patch("/update_movie_data0", (request, response) => {
  const { id, movietitle } = request.body;
  const movie_updb0 = Movie_data.getmovieDbServiceInstance();
  const movie_up0 = movie_updb0.updatemovie_data0_by_ID(id, movietitle);

  movie_up0
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

app.patch("/update_movie_data1", (request, response) => {
  const { id, year } = request.body;
  const movie_updb1 = Movie_data.getmovieDbServiceInstance();
  const movie_up1 = movie_updb1.updatemovie_data1_by_ID(id, year);

  movie_up1
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

app.patch("/update_movie_data2", (request, response) => {
  const { id, director } = request.body;
  const movie_updb2 = Movie_data.getmovieDbServiceInstance();
  const movie_up2 = movie_updb2.updatemovie_data2_by_ID(id, director);

  movie_up2
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

app.patch("/update_movie_data3", (request, response) => {
  const { id, length } = request.body;
  const movie_updb3 = Movie_data.getmovieDbServiceInstance();
  const movie_up3 = movie_updb3.updatemovie_data3_by_ID(id, length);

  movie_up3
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

app.patch("/update_movie_data4", (request, response) => {
  const { id, genre } = request.body;
  const movie_updb4 = Movie_data.getmovieDbServiceInstance();
  const movie_up4 = movie_updb4.updatemovie_data4_by_ID(id, genre);

  movie_up4
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

app.patch("/update_movie_data5", (request, response) => {
  const { id, budget } = request.body;
  const movie_updb5 = Movie_data.getmovieDbServiceInstance();
  const movie_up5 = movie_updb5.updatemovie_data5_by_ID(id, budget);

  movie_up5
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

app.patch("/update_movie_data6", (request, response) => {
  const { id, gross } = request.body;
  const movie_updb6 = Movie_data.getmovieDbServiceInstance();
  const movie_up6 = movie_updb6.updatemovie_data6_by_ID(id, gross);

  movie_up6
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

//update in review table
// app.patch("/update_Authrev_authname", (request, response) => {
//   const { id, auhtor } = request.body;
//   const rev_auth_updb = rev_data.getauthorDBServiceInstance();
//   const rev_auth_up = rev_auth_updb.updateAuthrev_authdata_by_ID(id, auhtor);
//   rev_auth_up
//     .then((authordata) => response.json({ success: authordata }))
//     .catch((err) => console.log(err));
// });

app.patch("/update_Authrev_movititlte", (request, response) => {
  const { id, movietitle } = request.body;
  const rev_updb0 = rev_data.getauthorDBServiceInstance();
  const rev_up0 = rev_updb0.updateAuthrev_data0_by_ID(id, movietitle);
  rev_up0
    .then((authordata) => response.json({ success: authordata }))
    .catch((err) => console.log(err));
});

app.patch("/update_Authrev", (request, response) => {
  const { id, rating } = request.body;
  const rev_updb1 = rev_data.getauthorDBServiceInstance();
  const rev_up1 = rev_updb1.updateAuthrev_data1_by_ID(id, rating);
  rev_up1
    .then((authordata) => response.json({ success: authordata }))
    .catch((err) => console.log(err));
});

//update in studio table
app.patch("/updateStudio_data0", (request, response) => {
  const { id, movietitle } = request.body;
  const std_updb0 = std_data.getstudioDBServiceInstance();
  const std_up0 = std_updb0.updateStudio_data0(id, movietitle);

  std_up0
    .then((std_data) => response.json({ success: std_data }))
    .catch((err) => console.log(err));
});

app.patch("/updateStudio_data1", (request, response) => {
  const { id, studio } = request.body;
  const std_updb1 = std_data.getstudioDBServiceInstance();
  const std_up1 = std_updb1.updateStudio_data1(id, studio);

  std_up1
    .then((std_data) => response.json({ success: std_data }))
    .catch((err) => console.log(err));
});

app.patch("/updateStudio_data2", (request, response) => {
  const { id, manager } = request.body;
  const std_updb2 = std_data.getstudioDBServiceInstance();
  const std_up2 = std_updb2.updateStudio_data2(id, manager);

  std_up2
    .then((std_data) => response.json({ success: std_data }))
    .catch((err) => console.log(err));
});

//update in actor table
app.patch("/updateActor_data1", (request, response) => {
  const { id, actor } = request.body;
  const act_updb1 = actor_data.getactorDBServiceInstance();
  const act_up1 = act_updb1.update_actor_data1(id, actor);
  act_up1
    .then((actordata) => response.json({ success: actordata }))
    .catch((err) => console.log(err));
});

app.patch("/updateActor_data2", (request, response) => {
  const { id, age } = request.body;
  const act_updb2 = actor_data.getactorDBServiceInstance();
  const act_up2 = act_updb2.update_actor_data2(id, age);
  act_up2
    .then((actordata) => response.json({ success: actordata }))
    .catch((err) => console.log(err));
});

app.patch("/updateActor_data3", (request, response) => {
  const { id, salary } = request.body;
  const act_updb3 = actor_data.getactorDBServiceInstance();
  const act_up3 = act_updb3.update_actor_data3(id, salary);
  act_up3
    .then((actordata) => response.json({ success: actordata }))
    .catch((err) => console.log(err));
});

app.patch("/updateActor_data4", (request, response) => {
  const { id, gender } = request.body;
  const act_updb4 = actor_data.getactorDBServiceInstance();
  const act_up4 = act_updb4.update_actor_data4(id, gender);
  act_up4
    .then((actordata) => response.json({ success: actordata }))
    .catch((err) => console.log(err));
});

//delete
app.delete("/deletemovie_data/:id", (request, response) => {
  const { id } = request.params;
  const delete_movie_db = Movie_data.getmovieDbServiceInstance();
  const movie_result_delete = delete_movie_db.Delete_movie_row_by_id(id);

  movie_result_delete
    .then((movie_data) => response.json({ success: movie_data }))
    .catch((err) => console.log(err));
});

// app.delete("/deleteAuth_rev_data/:id", (request, response) => {
//   const { id } = request.params;
//   const delete_auth = rev_data.getstudioDBServiceInstance();
//   const delete_auth_result = delete_auth.Delete_Studio_row_by_id(id);

//   delete_auth_result
//     .then((authordata) => response.json({ success: authordata }))
//     .catch((err) => console.log(err));
// });

app.delete("/deleteAuth_rev_data/:id", (request, response) => {
  const { id } = request.params;
  const delete_auth_rev = rev_data.getauthorDBServiceInstance();
  const delete_auth_rev_result = delete_auth_rev.Delete_review_row_by_id(id);

  delete_auth_rev_result
    .then((authordata) => response.json({ success: authordata }))
    .catch((err) => console.log(err));
});

app.delete("/deleteStudio/:id", (request, response) => {
  const { id } = request.params;
  const delete_std = std_data.getstudioDBServiceInstance();
  const delete_std_result = delete_std.Delete_Studio_row_by_id(id);

  delete_std_result
    .then((std_data) => response.json({ success: std_data }))
    .catch((err) => console.log(err));
});

app.delete("/deleteActor/:id", (request, response) => {
  const { id } = request.params;
  const delete_actor = actor_data.getactorDBServiceInstance();
  const delete_actor_result = delete_actor.Delete_actor_row_by_id(id);

  delete_actor_result
    .then((actor_data) => response.json({ success: actor_data }))
    .catch((err) => console.log(err));
});

//search
app.get("/searchmovie/:movietitle", (request, response) => {
  const { movietitle } = request.params;
  const search_movie = Movie_data.getmovieDbServiceInstance();
  const search_result_movie = search_movie.search_by_movietitle(movietitle);
  search_result_movie
    .then((movie_data) => response.json({ data: movie_data }))
    .catch((err) => console.log(err));
});

app.get("/searchAuthor_rev/:movietitle", (request, response) => {
  const { movietitle } = request.params;
  const search_author_rev = rev_data.getauthorDBServiceInstance();
  const search_result_auth_rev =
    search_author_rev.search_by_movietitle_author(movietitle);

  search_result_auth_rev
    .then((authordata) => response.json({ data: authordata }))
    .catch((err) => console.log(err));
});

app.get("/searchStudio/:movietitle", (request, response) => {
  const { movietitle } = request.params;
  const search_studio = std_data.getstudioDBServiceInstance();
  const search_result_studio =
    search_studio.search_by_movietitle_stdio(movietitle);
  search_result_studio
    .then((std_data) => response.json({ data: std_data }))
    .catch((err) => console.log(err));
});

app.get("/searchactor/:movietitle", (request, response) => {
  const { movietitle } = request.params;
  const search_actor = actor_data.getactorDBServiceInstance();
  const search_result_actor = search_actor.search_by_movietitle_act(movietitle);
  search_result_actor
    .then((actordata) => response.json({ data: actordata }))
    .catch((err) => console.log(err));
});

//Sql Queries
//Multirelation query 1
app.get("/multiretion_1", (request, response) => {
  console.log("multirelation1");

  const multirelation1_db = queries.getqueriesDbServiceInstance();
  const multirelation1_result = multirelation1_db.getmultirelation_1();

  multirelation1_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Multirelation query 2
app.get("/multirelation_2", (request, response) => {
  console.log("multirelation2");

  const multirelation2_db = queries.getqueriesDbServiceInstance();
  const multirelation2_result = multirelation2_db.getmultirelation_2();

  multirelation2_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Multirelation query 3
app.get("/multirelation_3", (request, response) => {
  console.log("multirelation3");

  const multirelation3_db = queries.getqueriesDbServiceInstance();
  const multirelation3_result = multirelation3_db.getmultirelation_3();

  multirelation3_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//SQL Join 1
app.get("/join1", (request, response) => {
  console.log("join1");

  const join1_db = queries.getqueriesDbServiceInstance();
  const join1_result = join1_db.getJoin1();

  join1_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//SQL Join 2
app.get("/join2", (request, response) => {
  console.log("join2");
  const join2_db = queries.getqueriesDbServiceInstance();
  const join2_result = join2_db.getjoin2();

  join2_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Aggregation
app.get("/count_rows", (request, response) => {
  console.log("count_rows");
  const count_rows_db = queries.getqueriesDbServiceInstance();
  const count_rows_result = count_rows_db.getCounting_rows();

  count_rows_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Grouping
app.get("/grouping", (request, response) => {
  console.log("grouping");
  const group_db = queries.getqueriesDbServiceInstance();
  const group_result = group_db.getGrouping();

  group_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Create view
app.get("/view", (request, response) => {
  console.log("view");

  const create_view_db = queries.getqueriesDbServiceInstance();
  //const create_view = create_view_db.get_Create_view();
  const view_data_result = create_view_db.get_create_view_data();

  view_data_result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//server
app.listen(process.env.PORT, () => console.log("Server is running"));
