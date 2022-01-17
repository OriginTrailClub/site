import * as Styles from './ImageBlock.styles';

import { ImageBlockImageProps, ImageBlockImage } from './ImageBlockImage';

type ImageBlockElements = React.ReactElement<ImageBlockImageProps>;

export interface ImageBlockProps {
  children: ImageBlockElements | ImageBlockElements[];
}

interface IImageBlockLayoutComposition {
  Image: React.FC<ImageBlockImageProps>;
}

export const ImageBlock: React.FC<ImageBlockProps> &
  IImageBlockLayoutComposition = function ImageBlock(props) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
};

ImageBlock.Image = ImageBlockImage;
