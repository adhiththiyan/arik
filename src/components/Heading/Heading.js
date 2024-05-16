import React from "react";

function Heading({ type = "h1", children, overrideClassNames = "" }) {
  switch (type) {
    case "h1":
      return (
        <>
          <h1 className={`header1 ${overrideClassNames}`}>{children}</h1>
        </>
      );
    case "h2":
      return (
        <>
          <h2 className={`header2 ${overrideClassNames}`}>{children}</h2>
        </>
      );
    case "h3":
      return (
        <>
          <h3 className={`header3 ${overrideClassNames}`}>{children}</h3>
        </>
      );
    case "h4":
      return (
        <>
          <h4 className={`header4 ${overrideClassNames}`}>{children}</h4>
        </>
      );
  }
  return null;
}

export default Heading;
