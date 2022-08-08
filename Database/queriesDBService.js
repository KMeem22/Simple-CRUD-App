let instance = null;
var connection = require("./db");
var cors = require("cors");
const express = require("express");

class queriesDBService {
  static getqueriesDbServiceInstance() {
    return instance ? instance : new queriesDBService();
  }

  //Multirelation queries
  async getmultirelation_1() {
    try {
      const multirelation1 = await new Promise((resolve, reject) => {
        const Query1 =
          "select studio from my_moviedb.studio_table where movietitle in(select movietitle from my_moviedb.movie_table where genre='Adventure');";

        //const count_row = results.rows[0].count;

        connection.query(Query1, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows);
        });
      });

      return multirelation1;
    } catch (error) {
      console.log(error);
    }
  }

  async getmultirelation_2() {
    try {
      const multirelation2 = await new Promise((resolve, reject) => {
        const Query2 =
          "select actor from my_moviedb.actor_table where movietitle in (select movietitle from my_moviedb.movie_table where genre = 'Comedy');";

        //const count_row = results.rows[0].count;

        connection.query(Query2, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows);
        });
      });

      return multirelation2;
    } catch (error) {
      console.log(error);
    }
  }

  //select movietitle, year, budget, gross from my_moviedb.movie_table where movietitle in (select movietitle from my_moviedb.actor_table where actor = 'Cameron Diaz');
  async getmultirelation_3() {
    try {
      const multirelation3 = await new Promise((resolve, reject) => {
        const Query3 =
          "select movietitle, year, budget, gross from my_moviedb.movie_table where movietitle in (select movietitle from my_moviedb.actor_table where actor = 'Cameron Diaz');";

        //const count_row = results.rows[0].count;

        connection.query(Query3, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows);
        });
      });

      return multirelation3;
    } catch (error) {
      console.log(error);
    }
  }

  //SQL Join
  //Join 1
  async getJoin1() {
    try {
      const join1 = await new Promise((resolve, reject) => {
        const Query_join1 =
          "select movie_table.movietitle, movie_table.director, movie_table.year, actor_table.actor, actor_table.gender from my_moviedb.movie_table inner join my_moviedb.actor_table on movie_table.id = actor_table.id where movie_table.genre='Animation';";

        //const count_row = results.rows[0].count;

        connection.query(Query_join1, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows);
        });
      });

      return join1;
    } catch (error) {
      console.log(error);
    }
  }

  //Join 1
  async getjoin2() {
    try {
      const join2 = await new Promise((resolve, reject) => {
        const Query_join2 =
          "select movie_table.movietitle, movie_table.year, movie_table.budget, movie_table.gross, studio_table.studio, studio_table.manager from my_moviedb.movie_table inner join my_moviedb.studio_table on movie_table.id = studio_table.id where movie_table.genre='Animation';";

        //const count_row = results.rows[0].count;

        connection.query(Query_join2, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows);
        });
      });

      return join2;
    } catch (error) {
      console.log(error);
    }
  }

  //Aggregation
  async getCounting_rows() {
    try {
      const count_response = await new Promise((resolve, reject) => {
        const countQuery =
          "select count(*) as count from my_moviedb.review_table;";

        //const count_row = results.rows[0].count;

        connection.query(countQuery, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows[0].count);
        });
      });

      return count_response;
    } catch (error) {
      console.log(error);
    }
  }

  //Grouping
  async getGrouping() {
    try {
      const group_response = await new Promise((resolve, reject) => {
        const groupQuery =
          "select movietitle, budget, gross from my_moviedb.movie_table group by gross>40000000;";

        //const count_row = results.rows[0].count;

        connection.query(groupQuery, (err, rows) => {
          //const c = rows[0]["COUNT(*)"];
          if (err) reject(new Error(err.message));
          //   rows[0]['COUNT(*)']
          resolve(rows);
        });
      });

      return group_response;
    } catch (error) {
      console.log(error);
    }
  }

  //Create and use View
  async get_Create_view() {
    try {
      const create_view = await new Promise((resolve, reject) => {
        const Query_create =
          "create view my_moviedb.actor as select actor from my_moviedb.actor_table where movietitle in(select movietitle from my_moviedb.movie_table where genre='Animation');";

        connection.query(Query_create, (err, rows) => {
          if (err) reject(new Error(err.message));
          resolve(rows);
        });
      });

      return create_view;
    } catch (error) {
      console.log(error);
    }
  }

  async get_create_view_data() {
    try {
      const view_data = await new Promise((resolve, reject) => {
        const Query_view_data = "select * from my_moviedb.actor;";

        connection.query(Query_view_data, (err, rows) => {
          if (err) reject(new Error(err.message));
          resolve(rows);
        });
      });

      return view_data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = queriesDBService;
