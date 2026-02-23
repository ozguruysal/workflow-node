import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

import { WorkflowNode } from "./app-components/WorkflowNode/WorkflowNode";

type AppNodeProps = {
  data: {
    title: string;
  };
  isConnectable: boolean;
};

export const AppNode = memo(({ data, isConnectable }: AppNodeProps) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />

      <WorkflowNode {...data} />

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
});
