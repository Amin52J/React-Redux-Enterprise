import React from 'react';

/**
 * hoc/passPropsToChild : passes properties to a single component
 * @param {class} Component the child component
 * @param {Object} props the properties to be assigned to the component
 * @returns {Function} a factory returning the component with assigned properties
 **/
export default function (Component, props) {
  return () => <Component {...props} />;
}
