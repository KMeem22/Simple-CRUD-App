let instance = null;
var connection = require("./db");
var cors = require("cors");
const express = require("express");

class authorDBService {
  static getauthorDBServiceInstance() {
    return instance ? instance : new authorDBService();
  }

  //Create
  async insertAuthore_revData(id, author, movietitle, rating) {
    try {
      //const insertReviewID =
      await new Promise((resolve, reject) => {
        const revQuery_Object =
          "INSERT INTO review_table (id, author, movietitle, rating) VALUES(?,?,?,?);";

        connection.query(
          revQuery_Object,
          [id, author, movietitle, rating],
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
        auhtor: author,
        movietitle: movietitle,
        rating: rating,
        rating_movie: rating,
      };
    } catch (error) {
      console.log(error);
    }
  }

  //Read
  async getallAuthor_revData() {
    try {
      const rev_response = await new Promise((resolve, reject) => {
        const auth_revQuery = "SELECT * FROM review_table;";

        connection.query(auth_revQuery, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return rev_response;
    } catch (error) {
      console.log(error);
    }
  }

  //Update
  // async updateAuthrev_authdata_by_ID(id, auhtor) {
  //   try {
  //     id = parseInt(id, 10);
  //     const response = await new Promise((resolve, reject) => {
  //       const up_query =
  //         "UPDATE my_moviedb.review_table SET auhtor = ? WHERE id = ?;";

  //       connection.query(up_query, [auhtor, id], (err, result) => {
  //         if (err) reject(new Error(err.message));
  //         resolve(result.affectedRows);
  //       });
  //     });

  //     return response === 1 ? true : false;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // }

  async updateAuthrev_data0_by_ID(id, movietitle) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.review_table SET movietitle=? WHERE id=?";

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

  async updateAuthrev_data1_by_ID(id, rating) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.review_table SET rating=? WHERE id=?";

        connection.query(up_query, [rating, id], (err, result) => {
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
  async Delete_review_row_by_id(id) {
    try {
      id = parseInt(id, 10);

      const delete_Auth_revresult = await new Promise((resolve, reject) => {
        const delete_revquery =
          "DELETE FROM my_moviedb.review_table WHERE id = ?";

        const reset_Auto_Increment =
          "ALTER TABLE my_moviedb.review_table AUTO_INCREMENT = ?";

        connection.query(delete_revquery, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });

        connection.query(reset_Auto_Increment, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return delete_Auth_revresult === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //Search
  async search_by_movietitle_author(movietitle) {
    try {
      //id = parseInt(id, 10);
      const search_response_author = await new Promise((resolve, reject) => {
        const search_author_query =
          "SELECT * FROM my_moviedb.review_table WHERE movietitle = ?;";

        connection.query(search_author_query, [movietitle], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return search_response_author;
      //console.log(search_res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = authorDBService;
