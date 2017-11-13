import React from 'react';

/**
 * hoc/passPropsToChildren : passes properties to a multiple component
 * @param {Set} ComponentsSet a set of child components
 * @param {Object} props the properties to be assigned to the components
 * @returns {Function} a factory returning the components with assigned properties
 **/
export default function (ComponentsSet, props) {
  return React.Children.map(ComponentsSet, child => React.cloneElement(child, props));
}
