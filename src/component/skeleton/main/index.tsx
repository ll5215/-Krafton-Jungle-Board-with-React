import React from "react";
import { 
  SkeletonMainBottom, 
  SkeletonMainCategory, 
  SkeletonMainCommentCount, 
  SkeletonMainContent, 
  SkeletonMainDate, 
  SkeletonMainTitle, 
  SkeletonMainTop, 
  SkeletonMainWrap, 
  SkeletonMainWriter
} from "./styled";

const SkeletonMain = () => {
    const skeletons = Array.from({ length: 6 }); // 6개의 스켈레톤 배열 생성

  return (
    <>
      {skeletons.map((_, index) => (
        <SkeletonMainWrap key={index}>
          <SkeletonMainTop>
            <SkeletonMainCategory />
            <SkeletonMainDate />
          </SkeletonMainTop>
          <SkeletonMainTitle />
          <SkeletonMainContent />
          <SkeletonMainBottom>
            <SkeletonMainCommentCount />
            <SkeletonMainWriter />
          </SkeletonMainBottom>
        </SkeletonMainWrap>
      ))}
    </>
  );
};

export default SkeletonMain;
