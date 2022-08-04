import { useState, useRef, useEffect } from "react";

import TextField from "@/ui/text-field";
import withLabel from "@/ui/with-label";

export default function Homepage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const { name, email } = form;

  const NameField = withLabel(withValidations(TextField));
  const EmailField = withLabel(withValidations(TextField));

  return (
    <div className="mt-16 container mx-auto">
      <NameField
        value={name}
        onChange={(name) =>
          setForm((prev) => ({
            ...prev,
            name,
          }))
        }>
        Name
      </NameField>

      <EmailField
        value={email}
        onChange={(email) =>
          setForm((prev) => ({
            ...prev,
            email,
          }))
        }>
        Email
      </EmailField>
    </div>
  );
}

export function withValidations(Component) {
  return function WrappedComponent({}) {
    const [errors, setErrors] = useState([]);
    return (
      <>
        <Component />
        {errors.length > 0 && <div>{errors.join(", ")}</div>}
      </>
    );
  };
}
