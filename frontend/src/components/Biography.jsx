import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          accusantium tenetur error magnam dignissimos praesentium, impedit
          totam delectus fugit ipsa voluptatibus necessitatibus quidem culpa
          aliquid odit magni quaerat id. Quasi ducimus iste culpa dolor
          voluptate. Culpa ullam totam dicta quasi, animi mollitia labore
          aliquid aut nemo incidunt accusamus voluptates temporibus?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          cumque soluta nisi voluptates eveniet sunt ab odit perferendis veniam
          eum quibusdam, doloribus dolorum repellat distinctio quisquam dicta
          dolore doloremque est aut porro vero animi laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere
          asperiores eligendi?
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
