import React from "react";


type SkeletonType = "top" | "title" | "content" | "bottom" | "category" | 
"detail-top" | "detail-title" | "detail-content";

const SkeletonElement: React.FC<{ type: SkeletonType }> = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}>
  </div>;
};

export default SkeletonElement;
