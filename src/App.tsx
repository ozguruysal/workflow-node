import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";

import type {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { SlackLogo } from "./app-components/workflow-icons/SlackLogo";
import { AppNode } from "./AppNode";

import type { WorkflowNodeProps } from "./app-components/WorkflowNode/WorkflowNode";

type AppNode = Omit<Node, "data"> & {
  data: WorkflowNodeProps;
};

const nodeTypes = {
  basicNode: AppNode,
};

const initialNodes: AppNode[] = [
  {
    id: "n1",
    type: "basicNode",
    position: { x: 0, y: 0 },
    data: {
      title: "Send Message",
      description: "post:message",
      icon: <SlackLogo />,
    },
  },
  {
    id: "n2",
    type: "basicNode",
    position: { x: 250, y: 0 },
    data: {
      title: "Send Message",
      description: "post:message",
      icon: <SlackLogo />,
      status: "inactive",
    },
  },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

function FlowContent() {
  const { setViewport, getNode } = useReactFlow();

  useEffect(() => {
    // Get the container dimensions
    const container = document.querySelector(".react-flow");
    if (container && getNode("n1")) {
      const { offsetWidth, offsetHeight } = container as HTMLElement;

      // Position to center nodes in viewport
      const centerX = offsetWidth / 2 - 125; // 125 is midpoint between nodes
      const centerY = offsetHeight / 2;

      setViewport({
        x: centerX,
        y: centerY,
        zoom: 1,
      });
    }
  }, [setViewport, getNode]);

  return null;
}

function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback((params: Connection) => {
    setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
        <FlowContent />
      </ReactFlow>
    </div>
  );
}

export default App;
