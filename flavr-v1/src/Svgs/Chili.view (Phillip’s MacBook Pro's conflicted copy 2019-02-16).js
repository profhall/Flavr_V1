/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars, no-dupe-keys */
import React from 'react';
import { css } from 'emotion';

const Chili1 = css({
  label: 'Chili1',
  alignSelf: 'var(--alignSelf)',
  marginTop: 'var(--marginTop)',
  marginBottom: 'var(--marginBottom)',
  marginLeft: 'var(--marginLeft)',
  marginRight: 'var(--marginRight)',
  opacity: 'var(--opacity)',
  width: 'var(--width)',
  height: 'var(--height)',
});
const SvgPath = css({ label: 'SvgPath', fill: 'var(--fill)' });
const SvgPath1 = css({ label: 'SvgPath1', fill: 'var(--fill)' });
const SvgPath2 = css({ label: 'SvgPath2', fill: 'var(--fill)' });
const SvgPath3 = css({ label: 'SvgPath3', fill: 'var(--fill)' });

const Chili = props => {
  return (
    <svg
      data-test-id={`${props['data-test-id'] || 'Chili'}|`}
      viewBox="0 0 49.829 49.829"
      style={{
        '--alignSelf': props.alignSelf,
        '--marginTop': `${props.marginTop}px`,
        '--marginBottom': `${props.marginBottom}px`,
        '--marginLeft': `${props.marginLeft}px`,
        '--marginRight': `${props.marginRight}px`,
        '--opacity': props.opacity,
        '--width': `${props.width}px`,
        '--height': `${props.height}px`,
      }}
      className={`views-block ${Chili1}`}
    >
      <path
        data-test-id={`Chili.SvgPath|`}
        d="M43.302 7.914a1 1 0 0 1-.72-1.693c1.038-1.08 1.59-2.29 1.407-3.082-.118-.509-.576-.912-1.362-1.199a1 1 0 0 1 .687-1.879c1.819.665 2.431 1.796 2.623 2.627.342 1.478-.374 3.316-1.914 4.92a1.001 1.001 0 0 1-.721.306z"
        style={{ '--fill': props.fill }}
        className={`views-block ${SvgPath}`}
      />
      <path
        data-test-id={`Chili.SvgPath:1|`}
        d="M32.238 15.303c-.137.467-.272.963-.4 1.526-3.5 15.417-16.372 23.55-30.887 31.589-.664.368-.755 1.503-.103 1.405 9.352-1.406 33.762.965 45.701-27.013 0 0 6.163-12.856-1.712-14.981.001 0-10.887-5.115-12.599 7.474z"
        style={{ '--fill': props.fill2 }}
        className={`views-block ${SvgPath1}`}
      />
      <path
        data-test-id={`Chili.SvgPath:2|`}
        d="M48.974 17.608c.892-4.035.86-8.868-3.839-10.136 0 0-10.635-4.987-13.19 6.315 2.49-.189 5.827-.69 6.761-2.029 0 0 2.21 2.21 1.072 5.358 0 0 4.688-.536 4.286-4.286 0 0 2.88 2.478 2.143 6.429-.001 0 1.389-.421 2.767-1.651z"
        style={{ '--fill': props.fill3 }}
        className={`views-block ${SvgPath2}`}
      />
      <path
        data-test-id={`Chili.SvgPath:3|`}
        d="M14.928 45.996a1.001 1.001 0 0 1-.307-1.952c21.656-6.978 24.045-21.793 24.067-21.941a.991.991 0 0 1 1.133-.846 1 1 0 0 1 .846 1.133c-.096.658-2.602 16.201-25.433 23.559a1.053 1.053 0 0 1-.306.047z"
        style={{ '--fill': props.fill4 }}
        className={`views-block ${SvgPath3}`}
      />
      {props.children}
    </svg>
  );
};
Chili.defaultProps = {
  alignSelf: 'auto',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  opacity: 1,
  width: 49.829,
  height: 49.829,
  fill: '#659c35',
  fill2: '#d13834',
  fill3: '#88c057',
  fill4: '#f75b57',
};
export default Chili;
