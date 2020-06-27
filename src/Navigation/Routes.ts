import About from "../About/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

export interface RouteProps {
  title: string;
}
export interface IRoute {
  Component: React.FC<any>;
  path: string;
  title: string;
}

interface IRoutes {
  [key: string]: IRoute;
}

const Routes: IRoutes = {
  About: {
    Component: About,
    path: "/about",
    title: "About Me",
  },
  Contact: {
    Component: Contact,
    path: "/contact",
    title: "Contact Info",
  },
  Projects: {
    Component: Projects,
    path: "/projects",
    title: "Projects",
  },
};

export default Routes;
