'use client';

import { Edge, Node, Position, ReactFlowProvider } from 'reactflow';

import styles from '@/app/page.module.css';
import Flow from '@/components/Flow';

const nodeSize = {
  width: 100,
  height: 100,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Param 1' },
    position: { x: 100, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Param 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Param 3' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Param 4' },
    position: { x: 600, y: 100 },
  },
];

const initialEdges: Edge[] = [
  { id: '1->2', source: '1', target: '2', animated: true },
  { id: '1->3', source: '1', target: '3', animated: true },
  { id: '2->4', source: '2', target: '4', animated: true },
];

async function fetchData(): Promise<{ nodes: Node[]; edges: Edge[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nodes: initialNodes, edges: initialEdges });
    }, 1000);
  });
}

export default async function FlowComponent() {
  const { nodes, edges } = await fetchData();
  return (
    <main className={styles.main}>
        <Flow
            nodes={nodes}
            edges={edges}
        />
    </main>
  );
}