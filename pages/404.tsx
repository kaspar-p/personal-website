import React from "react";
import exact from "prop-types-exact";
import Link from "next/link";

const propTypes = {};

function Custom404() {
  return (
    <div>
      <h2>looks like this page doesn&apos;t exist</h2>
      <h3>
        <Link href="/" style={{ color: "blue" }}>
          return to safety
        </Link>
      </h3>
    </div>
  );
}

Custom404.propTypes = exact(propTypes);

export default Custom404;
