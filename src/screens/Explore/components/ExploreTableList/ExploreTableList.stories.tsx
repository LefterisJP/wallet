import React from 'react';

import { ExploreListItemContent } from '@/api/types';

import { ExploreRow } from '../ExploreRow';

import { ExploreTableList } from './ExploreTableList';

import type { Meta, StoryObj } from '@storybook/react';

const mockItems: ExploreListItemContent[] = [
  {
    id: '79775d93-3fd8-447a-858c-23bd7bbb7dbb',
    title: 'Aave',
    body: 'Earn and borrow',
    buttonText: 'Open',
    icon: 'https://placehold.co/80x80@2x/orange/white/png?text=list',
    buttonLink: 'https://www.kraken.com',
    iconVariant: 'RoudedCorners',
  },
  {
    id: 'b07c6555-67f8-4193-add8-1e68d76efa37',
    title: 'Spark',
    body: 'Maker-based lending protocol',
    iconVariant: 'RoudedCorners',
    buttonText: 'Open',
    icon: 'https://placehold.co/80x80@2x/blue/white/png?text=list',
    buttonLink: 'https://www.kraken.com',
  },
  {
    id: '2214fa57-ad89-45c6-b432-3cd4e2fc698f',
    title: 'Compound',
    body: 'Autonomous interest rate protocol',
    iconVariant: 'Circle',
    buttonText: 'Open',
    icon: 'https://placehold.co/80x80@2x/pink/white/png?text=list',
    buttonLink: 'https://www.kraken.com',
  },
];

const ExploreTableListMeta: Meta<typeof ExploreTableList> = {
  title: 'Explore/ExploreTableList',
  component: ExploreTableList,
  args: {
    title: 'Table List',
    items: mockItems,
  },
  decorators: [
    Story => (
      <ExploreRow>
        <Story />
      </ExploreRow>
    ),
  ],
};

export default ExploreTableListMeta;

export const Basic: StoryObj<typeof ExploreTableList> = {};
