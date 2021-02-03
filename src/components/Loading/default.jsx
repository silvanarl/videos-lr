import React from 'react';

const Loading = ({ themeExternal }) => {
  return (
    <div className="content-loading">
      <div className={themeExternal === false ? 'loader themeInternal' : 'loader themeExternal'}></div>
      <div>
        <span className="textLoading">Esperános un momento...</span>
      </div>
    </div>
  );
};

export default Loading;
