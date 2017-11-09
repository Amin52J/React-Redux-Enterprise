import React from 'react';

export default function (ComponentsSet, props) {
  return React.Children.map(ComponentsSet, child => React.cloneElement(child, props));
}
