import { useContext } from "react";
import { ToastrContext } from "./ToastrContext";

const useToastr = useContext(ToastrContext);

export default useToastr;
