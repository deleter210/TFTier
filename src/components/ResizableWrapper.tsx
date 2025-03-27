// src/components/ResizableWrapper.tsx

import React, { ReactNode } from 'react';
import { Rnd } from 'react-rnd';

interface ResizableWrapperProps {
  children: ReactNode;
  defaultWidth?: number | string;
  defaultHeight?: number | string;
  minWidth?: number;
  minHeight?: number;
}

const ResizableWrapper: React.FC<ResizableWrapperProps> = ({
  children,
  defaultWidth = 800,
  defaultHeight = 600,
  minWidth = 400,
  minHeight = 300,
}) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      bounds="window"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      dragHandleClassName="drag-handle"
    >
      <div className="w-full h-full">
        {children}
      </div>
    </Rnd>
  );
};

export default ResizableWrapper;
