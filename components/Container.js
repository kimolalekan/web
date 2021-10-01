import React from 'react';

const Container = ({ children, fluid }) => (
  <div className={fluid ? 'rq-container-fluid' : 'rq-container'}>{children}</div>
);

export default Container;
