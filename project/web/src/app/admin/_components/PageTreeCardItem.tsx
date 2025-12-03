import { useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { PiFunctionBold } from 'react-icons/pi';
import { Show, TreeView } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react/color-mode';

import revalidateAction from '../_actions/revalidateAction';
import AnimationCheck from './AnimationCheck';

export default function TreeItem({ node }: { node: Node }) {
  const isClickable = node.mode === PageMode.static || node.mode === PageMode.ssg;
  const [showIcon, setShowIcon] = useState(false);
  const bg = useColorModeValue('teal.50', 'teal.700');
  const hoverBg = useColorModeValue('teal.100', 'teal.400');

  const handleClick = async (): Promise<void> => {
    if (!isClickable) return;

    // 갱신 액션
    await revalidateAction(node.path);

    setShowIcon(true);
  };

  return (
    <TreeView.Item
      onClick={handleClick}
      cursor={isClickable ? 'pointer' : 'default'}
      bg={isClickable ? bg : undefined}
      _hover={isClickable ? { bg: hoverBg } : undefined}
      my={1}
    >
      <TreeViewNodeIcon type={node.mode} />
      <TreeView.ItemText>{node.name}</TreeView.ItemText>

      <Show when={isClickable}>
        <AnimationCheck trigger={showIcon} />
      </Show>
    </TreeView.Item>
  );
}

const TreeViewNodeIcon = (props: { type: Node['mode'] }) => {
  switch (props.type) {
    case PageMode.static:
      return <FaRegCircle />;
    case PageMode.ssg:
      return <FaCircle />;
    case PageMode.dynamic:
      return <PiFunctionBold />;
    default:
      return null;
  }
};

export interface Node {
  name: string;
  path: string;
  mode?: PageMode;
  children?: Node[];
}

export enum PageMode {
  static,
  dynamic,
  ssg,
}
