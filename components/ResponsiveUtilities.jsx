import React from 'react';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const ResponsiveUtilities = () => (
  <div>
    <p>
      <span>Your current screen class is </span>
      <Visible xs><strong>xs</strong></Visible>
      <Visible sm><strong>sm</strong></Visible>
      <Visible md><strong>md</strong></Visible>
      <Visible lg><strong>lg</strong></Visible>
      <Visible xl><strong>xl</strong></Visible>
      <span>.</span>
    </p>

    <Visible xs sm>
      <p>Paragraph visible on extra small and small.</p>
    </Visible>
    <Hidden xs sm>
      <p>Paragraph hidden on extra small and small.</p>
    </Hidden>
    <Visible md lg>
      <p>Paragraph visible on medium and large.</p>
    </Visible>
    <Hidden md lg>
      <p>Paragraph hidden on medium and large.</p>
    </Hidden>

    <ScreenClassRender
      style={(screenClass, properties) => {
          let fontSize = 10;
          if (screenClass === 'sm') fontSize = 20;
          if (screenClass === 'md') fontSize = 30;
          if (screenClass === 'lg') fontSize = 40;
          if (screenClass === 'xl') fontSize = 50;
          return {
            fontSize: `${fontSize}px`,
            ...properties.style,
          };
        }
      }
    >
      <p style={{ color: 'red' }}>Some red text, which font size depends on the screen class.</p>
    </ScreenClassRender>
  </div>
);

ResponsiveUtilities.title = 'ResponsiveUtilities';

export default ResponsiveUtilities;
