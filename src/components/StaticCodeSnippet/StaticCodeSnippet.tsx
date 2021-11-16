/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { isValidElement } from 'react';
import palenight from 'prism-react-renderer/themes/palenight';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
  children?: React.ReactNode;
}

const StaticCodeSnippet = ({ children }: Props) => {
  if (!children || !isValidElement(children)) {
    throw new Error(
      `Static code snippet cannot render children of type ${typeof children}`,
    );
  }

  const code = children.props.children;
  const language = children.props.className?.replace('language-', '').trim();

  if (!code) {
    return <></>;
  }

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={palenight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="relative">
          {language && (
            <div
              className="absolute -top-8 right-0 p-2 px-5 rounded-md z-"
              style={style}
            >
              {language.toUpperCase()}
            </div>
          )}
          <pre
            className={`${className} rounded-md my-10 p-8 -mx-8 overflow-auto`}
            style={style}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

StaticCodeSnippet.defaultProps = {
  children: null,
};

export default StaticCodeSnippet;
