import React from "react";
import "./Loader.scss";
import { LoaderConfig } from "../models/Loader.model";


const Loader: React.FC<LoaderConfig> = ({ loaderTitle = '' }) => {
  return (
    <section className="w-100 h-100 d-flex justify-content-center align-items-center">
      { loaderTitle ? 
        <h5 className="mx-3">{loaderTitle}</h5> :
        <div className="loader"></div>
      }
    </section>
  );
};

export default Loader;
