let instance = null;
var connection = require("./db");
var cors = require("cors");
const express = require("express");

console.log("Actors Table");

class actorDBService {
  static getactorDBServiceInstance() {
    return instance ? instance : new actorDBService();
  }

  //CREATE
  async insertActorData(id, movietitle, actor, age, salary, gender) {
    try {
      //const insertReviewID =
      await new Promise((resolve, reject) => {
        const reviewQuery_Object =
          "INSERT INTO actor_table (id, movietitle, actor, age, salary, gender) VALUES(?,?,?,?,?,?);";

        connection.query(
          reviewQuery_Object,
          [id, movietitle, actor, age, salary, gender],
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
        actor: actor,
        age: age,
        salary: salary,
        gender: gender,
      };
    } catch (error) {
      console.log(error);
    }
  }

  //Read

  async getAllactordata() {
    try {
      const actor_response = await new Promise((resolve, reject) => {
        const actorQuery = "SELECT * FROM actor_table;";

        connection.query(actorQuery, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return actor_response;
    } catch (error) {
      console.log(error);
    }
  }

  //Update
  async update_actor_data1(id, actor) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.actor_table SET actor = ? WHERE id = ?;";

        connection.query(up_query, [actor, id], (err, result) => {
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

  async update_actor_data2(id, age) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.actor_table SET age = ? WHERE id = ?;";

        connection.query(up_query, [age, id], (err, result) => {
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

  async update_actor_data3(id, salary) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.actor_table SET salary = ? WHERE id = ?;";

        connection.query(up_query, [salary, id], (err, result) => {
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

  async update_actor_data4(id, gender) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.actor_table SET gender = ? WHERE id = ?;";

        connection.query(up_query, [gender, id], (err, result) => {
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
  async Delete_actor_row_by_id(id) {
    try {
      id = parseInt(id, 10);

      const delete_actresult = await new Promise((resolve, reject) => {
        const delete_actquery =
          "DELETE FROM my_moviedb.actor_table WHERE id = ?";

        const reset_Auto_Increment =
          "ALTER TABLE my_moviedb.actor_table AUTO_INCREMENT = ?";

        connection.query(delete_actquery, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });

        connection.query(reset_Auto_Increment, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return delete_actresult === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //Search
  async search_by_movietitle_act(movietitle) {
    try {
      //id = parseInt(id, 10);
      const search_response_act = await new Promise((resolve, reject) => {
        const search_act_query =
          "SELECT * FROM my_moviedb.actor_table WHERE movietitle = ?;";

        connection.query(search_act_query, [movietitle], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return search_response_act;
      //console.log(search_res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = actorDBService;
