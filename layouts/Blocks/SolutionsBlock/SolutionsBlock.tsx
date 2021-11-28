import * as React from 'react';

import * as Styles from './SolutionsBlock.styles';

import {
  SolutionsBlockCase,
  SolutionsBlockCaseProps,
} from './SolutionsBlockCase';
import {
  SolutionsBlockProblem,
  SolutionsBlockProblemProps,
} from './SolutionsBlockProblem';
import {
  SolutionsBlockSolution,
  SolutionsBlockSolutionProps,
} from './SolutionsBlockSolution';
import {
  SolutionsBlockImage,
  SolutionsBlockImageProps,
} from './SolutionsBlockImage';
import {
  SolutionsBlockDescription,
  SolutionsBlockDescriptionProps,
} from './SolutionsBlockDescription';
import {
  SolutionsBlockTitle,
  SolutionsBlockTitleProps,
} from './SolutionsBlockTitle';

type ParticipantsBlockElements = React.ReactElement<SolutionsBlockCaseProps>;

export interface ParticipantsBlockProps {
  children: ParticipantsBlockElements | ParticipantsBlockElements[];
}

interface IParticipantsBlockComposition {
  Case: React.FC<SolutionsBlockCaseProps>;
  Problem: React.FC<SolutionsBlockProblemProps>;
  Solution: React.FC<SolutionsBlockSolutionProps>;
  Image: React.FC<SolutionsBlockImageProps>;
  Description: React.FC<SolutionsBlockDescriptionProps>;
  Title: React.FC<SolutionsBlockTitleProps>;
}

export const SolutionsBlock: React.FC<ParticipantsBlockProps> &
  IParticipantsBlockComposition = function SolutionsBlock(props) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
};

SolutionsBlock.Case = SolutionsBlockCase;
SolutionsBlock.Problem = SolutionsBlockProblem;
SolutionsBlock.Solution = SolutionsBlockSolution;
SolutionsBlock.Image = SolutionsBlockImage;
SolutionsBlock.Title = SolutionsBlockTitle;
SolutionsBlock.Description = SolutionsBlockDescription;
