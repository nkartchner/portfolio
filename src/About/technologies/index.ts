import Angular10 from "./angular_solidBlack.png";
import Ngrx from "./ngrx.svg";
import Aws from "./aws.svg";
import CSharp from "./csharp.svg";
import Css from "./css.svg";
import Django from "./django.svg";
import Expo from "./expo.svg";
import Express from "./express.png";
import Git from "./git.svg";
import Html from "./html.svg";
import Js from "./js.svg";
import MERN from "./MERN.png";
import Mongo from "./mongo.png";
import MySql from "./mysql.svg";
import Nginx from "./nginx.svg";
import Python from "./python.svg";
import Razor from "./razor.svg";
import React from "./react_logo.png";
import Scss from "./scss.svg";
import Redux from "./redux.svg";
import SocketIO from "./socketIO.png";
import Typescript from "./typescript.svg";

export interface TechIcon {
    alt: string;
    src: string;
    years: number;
    isStrongest: boolean;
}

const icons: { [key: string]: TechIcon } = {
    Html: { alt: "Html", src: Html, years: 3, isStrongest: false },
    Css: { alt: "Css", src: Css, years: 3, isStrongest: false },
    Scss: { alt: "Scss", src: Scss, years: 3, isStrongest: false },
    Js: { alt: "Js", src: Js, years: 3, isStrongest: false },
    Typescript: { alt: "Typescript", src: Typescript, years: 3, isStrongest: true },
    Angular10: { alt: "Angular10", src: Angular10, years: 3, isStrongest: true },
    Ngrx: { alt: "Ngrx", src: Ngrx, years: 3, isStrongest: true },
    Express: { alt: "Express", src: Express, years: 3, isStrongest: true },
    Mongo: { alt: "Mongo", src: Mongo, years: 3, isStrongest: true },
    SocketIO: { alt: "SocketIO", src: SocketIO, years: 3, isStrongest: true },
    MERN: { alt: "MERN", src: MERN, years: 2, isStrongest: false },
    React: { alt: "React", src: React, years: 2, isStrongest: false },
    Redux: { alt: "Redux", src: Redux, years: 2, isStrongest: false },
    Expo: { alt: "Expo", src: Expo, years: 1, isStrongest: false },
    Python: { alt: "Python", src: Python, years: 2, isStrongest: false },
    Django: { alt: "Django", src: Django, years: 2, isStrongest: false },
    CSharp: { alt: "CSharp", src: CSharp, years: 3, isStrongest: false },
    Razor: { alt: "Razor", src: Razor, years: 3, isStrongest: false },
    MySql: { alt: "MySql", src: MySql, years: 3, isStrongest: false },
    Nginx: { alt: "Nginx", src: Nginx, years: 3, isStrongest: false },
    Git: { alt: "Git", src: Git, years: 3, isStrongest: false },
    Aws: { alt: "Aws", src: Aws, years: 3, isStrongest: false },
};

export default icons;
