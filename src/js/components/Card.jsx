import React from "react";

// style={{marginRight: spacing + 'em'}}

function Card() {
  return (
    <div className="card h-100 text-center border-1 rounded-0" >
      <img src="https://placehold.co/500x325" className="card-img-top" alt="500 x 325"/>

      <div className="card-body px-4 py-4">
        <h4 className="card-title fw-bold">Card title</h4>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>

      </div>
      <div className="card-footer py-4 bg-light border-top-0">
        <a href="#" className="btn btn-primary px-4">Find Out More!</a>
      </div>


    </div>

  )
}

export default Card;