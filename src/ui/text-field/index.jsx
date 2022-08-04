import { useRef, useEffect } from "react";

export default function TextField({
  value,
  focused = false,
  onChange = () => {},
}) {
  const ref = useRef();

  useEffect(() => {
    if (!focused) return;
    ref.current?.focus();
  }, [focused]);

  return (
    <>
      <input
        ref={ref}
        className="text-gray-800 p-2"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
