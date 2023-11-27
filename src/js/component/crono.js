import React from "react";

function Crono({ digito1, digito2, digito3, digito4, digito5, digito6 }) {
  const digitos = [digito6, digito5, digito4, digito3, digito2, digito1];

  return (
    <div className="row">
      {digitos.map((digito, index) => (
        <div key={index} className="col-sm-2 mb-3 mb-sm-0">
          <div className="card">
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