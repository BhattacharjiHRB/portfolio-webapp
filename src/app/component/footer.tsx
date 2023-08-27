"use client"

import React from "react";
import Email from "../icons/email";
import Facebook from "../icons/facebook";
import Github from "../icons/github";
import Instagram from "../icons/instagram";

export default function Footer() {
    return(
        <div className="flex flex-col justify-center p-10 bg-stone-800 shadow-footer gap-20">
            <section className="flex flex-row gap-5 justify-center items-center">
               <a href={"https://www.facebook.com/"} aria-lable = "facebook" > 
               <Facebook className=" cursor-pointer shadow-xl rounded-xl shadow-black hover:shadow-slate-950 hover:shadow-inner " aria-label="facebook" />
               </a> 
               <a href={"https://www.instagram.com/"} aria-lable = "Instagram" >
                    <Instagram className=" cursor-pointer shadow-xl rounded-xl shadow-black hover:shadow-slate-950 hover:shadow-inner " /> 
               </a> 
               <a href={"https://github.com/"} aria-lable = "github" >
                    <Github className=" cursor-pointer shadow-xl rounded-xl shadow-black hover:shadow-slate-950 hover:shadow-inner "/> 
               </a> 
               <a href={"https://gmail.com"} aria-lable = "Email" > 
               <Email  className=" cursor-pointer shadow-xl rounded-xl shadow-black hover:shadow-slate-950 hover:shadow-inner  " />  
               </a>
            </section>
        </div>
    )
}