import React from 'react';

interface DemoAnnotationProps {
  id: string | number;
  style?: React.CSSProperties;
  lineStyle?: React.CSSProperties;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children?: React.ReactNode;
  offset?: number;
  hideLine?: boolean;
}

export default function DemoAnnotation({
  id,
  style,
  lineStyle,
  position = 'left',
  children,
  offset = 28,
  hideLine = false
}: DemoAnnotationProps) {

  const size = 24;
  const color = '#333';
  const lineReduction = 8;
  const finalLength = Math.max(offset - lineReduction, 0);

  const containerBase: React.CSSProperties = {
    position: 'absolute',
    zIndex: 20,
    pointerEvents: 'none'
  };

  const badgeStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2
  };

  const lineBase: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: color,
    zIndex: 1
  };

  const containerPosition: React.CSSProperties = {};
  const linePosition: React.CSSProperties = {};

  switch (position) {
    case 'left':
      containerPosition.left = -offset;
      containerPosition.top = '50%';
      containerPosition.transform = 'translateY(-50%)';

      linePosition.right = -finalLength;
      linePosition.top = '50%';
      linePosition.width = finalLength;
      linePosition.height = 1;
      linePosition.transform = 'translateY(-50%)';
      break;

    case 'right':
      containerPosition.right = -offset;
      containerPosition.top = '50%';
      containerPosition.transform = 'translateY(-50%)';

      linePosition.left = -finalLength;
      linePosition.top = '50%';
      linePosition.width = finalLength;
      linePosition.height = 1;
      linePosition.transform = 'translateY(-50%)';
      break;

    case 'top':
      containerPosition.top = -offset;
      containerPosition.left = '50%';
      containerPosition.transform = 'translateX(-50%)';

      linePosition.bottom = -finalLength;
      linePosition.left = '50%';
      linePosition.height = finalLength;
      linePosition.width = 1;
      linePosition.transform = 'translateX(-50%)';
      break;

    case 'bottom':
      containerPosition.bottom = -offset;
      containerPosition.left = '50%';
      containerPosition.transform = 'translateX(-50%)';

      linePosition.top = -finalLength;
      linePosition.left = '50%';
      linePosition.height = finalLength;
      linePosition.width = 1;
      linePosition.transform = 'translateX(-50%)';
      break;
  }

  if (!children) return null;

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}

      <div style={{ ...containerBase, ...containerPosition, ...style }}>
        {!hideLine && (
          <div style={{ ...lineBase, ...linePosition, ...lineStyle }} />
        )}
        <div style={badgeStyle}>{id}</div>
      </div>
    </div>
  );
}