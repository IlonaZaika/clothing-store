import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage image={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
