
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={\`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-2xl shadow \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}
