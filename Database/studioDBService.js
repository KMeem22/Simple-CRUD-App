let instance = null;
var connection = require("./db");
var cors = require("cors");
const express = require("express");

class studioDBService {
  static getstudioDBServiceInstance() {
    return instance ? instance : new studioDBService();
  }

  //Create
  async insertStudio_Data(id, movietitle, studio, manager) {
    try {
      //const insertReviewID =
      await new Promise((resolve, reject) => {
        const stdQuery_Object =
          "INSERT INTO studio_table (id, movietitle, studio, manager) VALUES(?,?,?,?);";

        connection.query(
          stdQuery_Object,
          [id, movietitle, studio, manager],
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
        studio: studio,
        manager: manager,
      };
    } catch (error) {
      console.log(error);
    }
  }

  //Read
  async getallStudio_Data() {
    try {
      const std_response = await new Promise((resolve, reject) => {
        const std_revQuery = "SELECT * FROM studio_table;";

        connection.query(std_revQuery, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return std_response;
    } catch (error) {
      console.log(error);
    }
  }

  // //Update
  // async updateStudio_data1(id, studio) {
  //   try {
  //     id = parseInt(id, 10);
  //     const response = await new Promise((resolve, reject) => {
  //       const up_query =
  //         "UPDATE my_moviedb.studio_table SET rating=? WHERE id=?";

  //       connection.query(up_query, [studio, id], (err, result) => {
  //         if (err) reject(new Error(err.message));
  //         resolve(result.affectedRows);
  //       });
  //     });

  //     return response === 1 ? true : false;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //Update_1
  async updateStudio_data0(id, movietitle) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.studio_table SET movietitle = ? WHERE id = ?;";

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

  async updateStudio_data1(id, studio) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.studio_table SET studio = ? WHERE id = ?;";

        connection.query(up_query, [studio, id], (err, result) => {
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

  //Update_2
  async updateStudio_data2(id, manager) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const up_query =
          "UPDATE my_moviedb.studio_table SET manager = ? WHERE id = ?;";

        connection.query(up_query, [manager, id], (err, result) => {
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
  async Delete_Studio_row_by_id(id) {
    try {
      id = parseInt(id, 10);

      const delete_std_result = await new Promise((resolve, reject) => {
        const delete_std_query =
          "DELETE FROM my_moviedb.studio_table WHERE id = ?";

        const reset_Auto_Increment =
          "ALTER TABLE my_moviedb.studio_table AUTO_INCREMENT = ?";

        connection.query(delete_std_query, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });

        connection.query(reset_Auto_Increment, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return delete_std_result === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //Search
  async search_by_movietitle_stdio(movietitle) {
    try {
      //id = parseInt(id, 10);
      const search_response_studio = await new Promise((resolve, reject) => {
        const search_studio_query =
          "SELECT * FROM my_moviedb.studio_table WHERE movietitle = ?;";

        connection.query(search_studio_query, [movietitle], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return search_response_studio;
      //console.log(search_res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = studioDBService;
