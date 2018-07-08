import React from 'react';
import Link from "gatsby-link";

export default function PaginationLink(props) {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
}