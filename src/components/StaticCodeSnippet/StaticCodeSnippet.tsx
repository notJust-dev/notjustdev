/* eslint-disable react/jsx-key */
import React, { isValidElement } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

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
    <Highlight code={code} language={language} theme={themes.palenight}>
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
