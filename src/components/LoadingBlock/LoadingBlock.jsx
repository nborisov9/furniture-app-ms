import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingBlock = () => {
  return (
    <div className="item-product__body">
      <ContentLoader
        className="loading-item"
        speed={2}
        width={400}
        height={560}
        viewBox="0 0 400 560"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="229" y="267" rx="0" ry="0" width="1" height="11" />
        <rect x="4" y="390" rx="23" ry="23" width="330" height="100" />
        <rect x="152" y="263" rx="0" ry="0" width="1" height="33" />
        <rect x="20" y="15" rx="37" ry="37" width="290" height="290" />
        <rect x="67" y="327" rx="19" ry="19" width="192" height="42" />
        <rect x="12" y="512" rx="8" ry="8" width="122" height="35" />
        <rect x="161" y="505" rx="21" ry="21" width="165" height="48" />
        <rect x="281" y="542" rx="0" ry="0" width="4" height="3" />
      </ContentLoader>
    </div>
  );
};
