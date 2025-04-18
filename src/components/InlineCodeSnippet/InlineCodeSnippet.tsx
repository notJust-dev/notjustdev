/* eslint-disable react/jsx-key */
import React, { ReactNode } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface Props {
  children?: ReactNode;
}

const InlineCodeSnippet = ({ children }: Props) => (
  <Highlight
    code={children as string}
    language="javascript"
    theme={themes.gruvboxMaterialDark}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => {
      const line = tokens[0];
      return (
        <span
          {...getLineProps({ line })}
          className={`${className} px-2 py-1 rounded-md`}
          style={style}
        >
          {line.map((token, key) => (
            <span key={key} {...getTokenProps({ token })} />
          ))}
        </span>
      );
    }}
  </Highlight>
);

export default InlineCodeSnippet;
