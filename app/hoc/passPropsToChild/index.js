import React from 'react';

export default function (Component, props) {
  return () => <Component {...props}/>;
}
