import React, { createContext } from "react";
import Toastr from "./Toastr";

export interface Toast {
  id: string;
  desc: string;
  title: string;
  level: "success" | "warning" | "info" | "error";
}

export type ToastrPosition =
  | "toastrTopRt"
  | "toastrTopLt"
  | "toastrBtmRt"
  | "toastrBtmLt";

type IToastrContext = {
  addToast: (toast: Toast) => void;
  setPosition: (position: ToastrPosition) => void;
};
const generateUEID = () => {
  let first: string | number = (Math.random() * 46656) | 0;
  let second: string | number = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);
  return first + second;
};
export const ToastrContext = createContext<IToastrContext | null>(null);

export const TESTLIST: Partial<Toast>[] = [
  {
    desc: "This is the first test toastr",
    level: "success",
    title: "TEST_1",
  },
  {
    desc: "This is the second test toastr",
    level: "error",
    title: "TEST_2",
  },
  {
    desc: "This is the third test toastr",
    level: "info",
    title: "TEST_3",
  },
  {
    desc: "This is the forth test toastr",
    level: "warning",
    title: "TEST_4",
  },
];

const ToastrProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const [position, setPos] = React.useState<ToastrPosition>("toastrBtmRt");

  const activeToasts = toasts.length;

  React.useEffect(() => {
    if (activeToasts > 0) {
      const timer = setTimeout(
        () => setToasts((OgToasts) => OgToasts.splice(0, OgToasts.length)),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [activeToasts]);

  const addToast = React.useCallback(
    (toast: Toast) =>
      setToasts((OgToasts) => {
        toast.id = generateUEID();
        return [toast, ...OgToasts];
      }),
    []
  );

  const setPosition = React.useCallback(
    (position: ToastrPosition) => setPos(position),
    []
  );

  const remove = React.useCallback(
    (toastId: string) =>
      setToasts((OgToasts) => OgToasts.filter((t) => t.id !== toastId)),
    []
  );

  const value = React.useMemo(() => ({ addToast, setPosition }), [
    addToast,
    setPosition,
  ]);
  return (
    <ToastrContext.Provider value={value}>
      {children}
      <Toastr position={position} toasts={toasts} remove={remove} />
    </ToastrContext.Provider>
  );
};

export default ToastrProvider;
