import React from "react";
import s from "./Layout.module.scss"

export const Layout = (props: any) => {

   return  (
       <div className={s.s} >
           {props.children}
       </div>
   )
}