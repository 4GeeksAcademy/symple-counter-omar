import React from "react";

function Crono({ digito1, digito2, digito3, digito4, digito5, digito6 }) {
  const digitos = [digito6, digito5, digito4, digito3, digito2, digito1];

  return (
    <div className="row bg-dark">
      <div className="col-sm-1 ">
        <div className="p-5 fs-1">
          <div className="card-body bg-dark text-white">
            <p className="card-text"><i className="fa fa-clock"></i></p>
          </div>
        </div>
      </div>
      {digitos.map((digito, index) => (
        <div key={index} className="col-sm-1">
          <div className="p-5 fs-1">
            <div className="card-body bg-dark text-white">
              <p className="card-text">{digito}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Crono;
