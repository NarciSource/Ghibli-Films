'use client';

import { LuFolder } from 'react-icons/lu';
import { createTreeCollection, TreeView, type TreeViewNodeState } from '@chakra-ui/react';

import { useFilmsQuery } from '@/graphql/api/hooks';
import PageTreeCardItem, { type Node, PageMode } from './PageTreeCardItem';

export default function PageTreeCard() {
  const collection = getCollection();

  return (
    <TreeView.Root
      collection={collection}
      expandedValue={['(browse)', '(authentication)', '(personal)', 'film']}
    >
      <TreeView.Label>Route</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }: { node: Node; nodeState: TreeViewNodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <LuFolder />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <PageTreeCardItem node={node} />
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  );
}

function getCollection() {
  const { data } = useFilmsQuery();

  const collection = createTreeCollection<Node>({
    nodeToValue: (node) => node.name,
    nodeToString: (node) => node.name,
    rootNode: {
      name: 'ROOT',
      path: 'Route',
      children: [
        {
          name: '(browse)',
          path: '/',
          children: [
            { name: 'home', path: '/', mode: PageMode.static },
            { name: 'search', path: '/search', mode: PageMode.dynamic },
          ],
        },
        {
          name: '(authentication)',
          path: '/',
          children: [
            { name: 'login', path: '/login', mode: PageMode.static },
            { name: 'signup', path: '/signup', mode: PageMode.static },
          ],
        },
        {
          name: '(personal)',
          path: '/',
          children: [{ name: 'reviews', path: '/reviews', mode: PageMode.dynamic }],
        },
        {
          name: 'film',
          path: '/film',
          children: data?.films.films.map(({ id, title }) => ({
            name: `${title}`,
            path: `/film/${id}`,
            mode: PageMode.ssg,
          })),
        },
      ],
    },
  });

  return collection;
}
