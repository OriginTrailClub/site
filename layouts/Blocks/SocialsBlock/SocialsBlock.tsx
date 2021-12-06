import * as React from 'react';

import * as Styles from './SocialsBlock.styles';

import type * as Stitches from '@stitches/react';

import {
  SocialsBlockGithub,
  SocialsBlockGithubProps,
} from './SocialsBlockGithub';
import {
  SocialsBlockDiscord,
  SocialsBlockDiscordProps,
} from './SocialsBlockDiscord';
import {
  SocialsBlockTwitter,
  SocialsBlockTwitterProps,
} from './SocialsBlockTwitter';
import {
  SocialsBlockReddit,
  SocialsBlockRedditProps,
} from './SocialsBlockReddit';
import {
  SocialsBlockTelegram,
  SocialsBlockTelegramProps,
} from './SocialsBlockTelegram';
import {
  SocialsBlockMedium,
  SocialsBlockMediumProps,
} from './SocialsBlockMedium';

type SocialsBlockElements = React.ReactElement<
  | SocialsBlockGithubProps
  | SocialsBlockDiscordProps
  | SocialsBlockTwitterProps
  | SocialsBlockRedditProps
  | SocialsBlockTelegramProps
  | SocialsBlockMediumProps
>;

export interface SocialsBlockProps {
  children: SocialsBlockElements[];
}

interface ISocialsBlockComposition {
  Github: React.FC<SocialsBlockGithubProps>;
  Discord: React.FC<SocialsBlockDiscordProps>;
  Twitter: React.FC<SocialsBlockTwitterProps>;
  Reddit: React.FC<SocialsBlockRedditProps>;
  Telegram: React.FC<SocialsBlockTelegramProps>;
  Medium: React.FC<SocialsBlockMediumProps>;
}

interface IgetColumnSizeOptions {
  /**
   * Total item of elements in the grid
   */
  count: number;
  /**
   * Min items that can fit in a single column
   */
  minColumns: number;
  /**
   * Max items that can fit in a single column
   */
  maxColumns: number;
}

/* A helper method to determine the size of a single social */
const getColumnWidth = (options: IgetColumnSizeOptions): Stitches.CSS => {
  const { count, minColumns, maxColumns } = options;

  return {
    $$columnCount: Math.min(
      maxColumns,
      Math.max(minColumns, Math.ceil(count / Math.ceil(count / maxColumns)))
    ),
  };
};

export const SocialsBlock: React.FC<SocialsBlockProps> &
  ISocialsBlockComposition = function SocialsBlock(props) {
  const { children } = props;

  const count = React.Children.count(children);

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>
        <ul
          className={Styles.socials({
            css: {
              ...getColumnWidth({
                count: count,
                minColumns: 3,
                maxColumns: 3,
              }),
              '@bp1': getColumnWidth({
                count: count,
                minColumns: 4,
                maxColumns: 4,
              }),
              '@bp2': getColumnWidth({
                count: count,
                minColumns: 3,
                maxColumns: 4,
              }),
              '@bp4': getColumnWidth({
                count: count,
                minColumns: 4,
                maxColumns: 6,
              }),
            },
          })}
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

SocialsBlock.Github = SocialsBlockGithub;
SocialsBlock.Discord = SocialsBlockDiscord;
SocialsBlock.Twitter = SocialsBlockTwitter;
SocialsBlock.Reddit = SocialsBlockReddit;
SocialsBlock.Telegram = SocialsBlockTelegram;
SocialsBlock.Medium = SocialsBlockMedium;
