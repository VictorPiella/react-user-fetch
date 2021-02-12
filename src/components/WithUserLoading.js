import React from 'react';
function WithUserLoading(Component) {
  return function WithUserLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, please :)
      </p>
    );
  };
}
export default WithUserLoading;
