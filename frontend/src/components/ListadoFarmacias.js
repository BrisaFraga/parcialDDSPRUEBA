import React from 'react';

const ListadoArticulos = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripcion</th>
            <th>Sucursales</th>
            
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdFarmacia}>
              <td>{item.IdFarmacia}</td>
              <td>{item.Descripcion}</td>
              <td>{item.Sucursales}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoFarmacias;
