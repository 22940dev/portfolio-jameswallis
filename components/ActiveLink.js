import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className || '';
  // Only use top level path
  const splitPath = router.pathname.split('/');
  // Remove slash from page href
  const href = props.href.replace('/', '');
  if (splitPath[1] === href) {
    className = `${className} active`.trim();
  }
  delete props.activeClassName;
  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);