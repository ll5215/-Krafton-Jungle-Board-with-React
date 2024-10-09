import { SkeletonBoardDetailWrap, SkeletonBoardDetailTop, SkeletonBoardDetailCategory, SkeletonBoardDetailDate, SkeletonBoardDetailTitle, SkeletonBoardDetailContent, SkeletonBoardDetailBottom, SkeletonBoardDetailCommentCount, SkeletonBoardDetailWriter } from "./styled";


const SkeletonBoardDetail = () => {

  return (
    <SkeletonBoardDetailWrap>
        <SkeletonBoardDetailTop>
            <SkeletonBoardDetailCategory />
            <SkeletonBoardDetailDate />
        </SkeletonBoardDetailTop>
        <SkeletonBoardDetailTitle />
        <SkeletonBoardDetailContent />
        <SkeletonBoardDetailBottom>
            <SkeletonBoardDetailCommentCount />
            <SkeletonBoardDetailWriter />
        </SkeletonBoardDetailBottom>
    </SkeletonBoardDetailWrap>
  );
};

export default SkeletonBoardDetail;
