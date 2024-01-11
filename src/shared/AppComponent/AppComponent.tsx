import React from 'react';
import {Layout} from "../Layout";
import {Route, Routes} from "react-router-dom";
import  "../../img/1.jpg"
import  "../../img/zoom.svg"


export function AppComponent(){

  return (
              <Routes>
                  <Route path="/" element={<Layout/>}>

                  </Route>
              </Routes>
  );
}
