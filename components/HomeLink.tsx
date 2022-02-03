import React, { ReactNode } from "react";
import PageLink from "./PageLink";

interface HomeLinkPropTypes {
  to?: string;
  onClick?: CallableFunction;
  onHover?: CallableFunction;
  children: ReactNode;
}

function HomeLink(props: HomeLinkPropTypes) {
  return (
    <PageLink
      to={props.to}
      onClick={props.onClick}
      onHover={props.onHover}
      variant="h5"
      additionalStyles={{ width: "100%" }}
    >
      {props.children}
    </PageLink>
  );
}

export default HomeLink;
