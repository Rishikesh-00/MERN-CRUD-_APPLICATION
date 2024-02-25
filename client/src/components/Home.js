import React from "react";

export default function home() {
  return (
    <>
      <div className="conainer float-end  me-5">
        <button type="button" class="btn btn-primary mx-2">
          Primary
        </button>
      </div>
      
      <div className="p-5">
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>rishi</td>
              <td>a@gail.com</td>
              <td>developer</td>
              <td>9765</td>
              <td ><button type="button" class="btn btn-primary  ">view</button><button type="button" class="btn btn-warning ms-3">update</button><button type="button" class="btn btn-danger ms-3">delete</button></td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </>
  );
}
