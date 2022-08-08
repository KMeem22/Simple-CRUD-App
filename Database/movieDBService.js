let instance = null;
var connection = require("./db");
var cors = require("cors");
const express = require("express");

class movieDVService {
  static getmovieDbServiceInstance() {
    return instance ? instance : new movieDVService();
  }

  //Create
  async insertmovieData(
    id,
    movietitle,
    year,
    director,
    length,
    genre,
    budget,
    gross
  ) {
    try {
      //const insertReviewID =
      await new Promise((resolve, reject) => {
        const reviewQuery_Object =
          "INSERT INTO movie_table (id, movietitle, year, director, length, genre, budget, gross) VALUES(?,?,?,?,?,?,?,?);";

        connection.query(
          reviewQuery_Object,
          [id, movietitle, year, director, length, genre, budget, gross],
          (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(result);
            //resolve(result.insertReviewID);
          }
        );
      });

      //console.log(insertReviewID);
      //return response;
      return {
        id: id,
        movietitle: movietitle,
        year: year,
        director: director,
        length: length,
        genre: genre,
        budget: budget,
        gross: gross,
      };
    } catch (error) {
      console.log(error);
    }
  }

  //Read
  async getAllmovieData() {
    try {
      const movie_response = await new Promise((resolve, reject) => {
        const movieQuery = "SELECT * FROM movie_table;";

        connection.query(movieQuery, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return movie_response;
    } catch (error) {
      console.log(error);
    }
  }

  //Update Year in Movie Table
  //Update
  async updatemovie_data0_by_ID(id, movietitle) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.movie_table SET movietitle=? WHERE id=?";

        connection.query(up_query, [movietitle, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatemovie_data1_by_ID(id, year) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query = "UPDATE my_moviedb.movie_table SET year=? WHERE id=?";

        connection.query(up_query, [year, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatemovie_data2_by_ID(id, director) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.movie_table SET director=? WHERE id=?";

        connection.query(up_query, [director, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatemovie_data3_by_ID(id, length) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.movie_table SET length=? WHERE id=?";

        connection.query(up_query, [length, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatemovie_data4_by_ID(id, genre) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query = "UPDATE my_moviedb.movie_table SET genre=? WHERE id=?";

        connection.query(up_query, [genre, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatemovie_data5_by_ID(id, budget) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.movie_table SET budget=? WHERE id=?";

        connection.query(up_query, [budget, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatemovie_data6_by_ID(id, gross) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query = "UPDATE my_moviedb.movie_table SET gross=? WHERE id=?";

        connection.query(up_query, [gross, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //Delete
  async Delete_movie_row_by_id(id) {
    try {
      id = parseInt(id, 10);

      const delete_movieresult = await new Promise((resolve, reject) => {
        const delete_moviequery =
          "DELETE FROM my_moviedb.movie_table WHERE id = ?";

        const reset_Auto_Increment =
          "ALTER TABLE my_moviedb.movie_table AUTO_INCREMENT = ?";

        connection.query(delete_moviequery, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });

        connection.query(reset_Auto_Increment, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return delete_movieresult === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //Search
  async search_by_movietitle(movietitle) {
    try {
      //id = parseInt(id, 10);
      const search_response_movie = await new Promise((resolve, reject) => {
        const search_movie_query =
          "SELECT * FROM my_moviedb.movie_table WHERE movietitle = ?;";

        connection.query(search_movie_query, [movietitle], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return search_response_movie;
      //console.log(search_res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = movieDVService;
