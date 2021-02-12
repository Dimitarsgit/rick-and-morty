import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="not-found-holder">
      <Link to="/episode">
        <img src="../../../404.jpg" alt="404" />
      </Link>
    </div>
  );
};
