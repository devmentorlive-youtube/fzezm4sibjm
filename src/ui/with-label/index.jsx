import { useState } from "react";

export default function withLabel(Component) {
  return function WrappedComponent({ children }) {
    const [clicked, setClicked] = useState(false);

    return (
      <>
        <label
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1000);
          }}
          className="font-black text-sm block my-1">
          {children}
        </label>
        <Component focused={clicked} />
      </>
    );
  };
}
