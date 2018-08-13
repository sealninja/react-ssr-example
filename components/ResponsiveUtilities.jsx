import React from 'react';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const ResponsiveUtilities = () => (
  <div>
    <p>
      <span>
Your current screen class is
        {' '}
      </span>
      <Visible xs>
        <strong>
xs
        </strong>
      </Visible>
      <Visible sm>
        <strong>
sm
        </strong>
      </Visible>
      <Visible md>
        <strong>
md
        </strong>
      </Visible>
      <Visible lg>
        <strong>
lg
        </strong>
      </Visible>
      <Visible xl>
        <strong>
xl
        </strong>
      </Visible>
      <span>
.
      </span>
    </p>

    <Visible xs sm>
      <p>
Paragraph visible on extra small and small.
      </p>
    </Visible>
    <Hidden xs sm>
      <p>
Paragraph hidden on extra small and small.
      </p>
    </Hidden>
    <Visible md lg>
      <p>
Paragraph visible on medium and large.
      </p>
    </Visible>
    <Hidden md lg>
      <p>
Paragraph hidden on medium and large.
      </p>
    </Hidden>

    <ScreenClassRender render={screenClass => (
      <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', color: 'red' }}>
        Some red text, which font size depends on the screen class. Currently:
        {' '}
        {['lg', 'xl'].includes(screenClass) ? 'Large' : 'Small'}
      </p>
    )}
    />
  </div>
);

ResponsiveUtilities.title = 'ResponsiveUtilities';

export default ResponsiveUtilities;
