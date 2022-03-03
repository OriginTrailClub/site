import * as React from 'react';

import Image from 'next/image';

import { useButton } from '@react-aria/button';

import PlayFillIcon from 'remixicon-react/PlayFillIcon';

import * as Styles from './YoutubeEmbed.styles';

export type YoutubeEmbedProps = {
  videoId: string;
  title: string;
};

export function YoutubeEmbed(props: YoutubeEmbedProps) {
  const [isRequested, setIsRequested] = React.useState(false);

  const videoRef = React.useRef<HTMLIFrameElement>(null!);
  const placeholderRef = React.useRef<HTMLButtonElement>(null!);

  React.useLayoutEffect(() => {
    if (isRequested) {
      videoRef.current.focus();
    }
  }, [isRequested]);

  const { videoId, title } = props;

  const { buttonProps } = useButton(
    {
      onPress: () => {
        setIsRequested(true);
      },
    },
    placeholderRef
  );

  return (
    <div>
      <div className={Styles.aspectRatio()}>
        {isRequested ? (
          <iframe
            ref={videoRef}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={Styles.iframe()}
          />
        ) : (
          <button {...buttonProps} className={Styles.placeholder()}>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              layout="fill"
              objectFit="contain"
              alt={title}
            />

            <div className={Styles.trigger()}>
              <PlayFillIcon className={Styles.icon()} />
            </div>
          </button>
        )}
      </div>
      <span aria-hidden="true" className={Styles.label()}>
        {title}
      </span>
    </div>
  );
}
