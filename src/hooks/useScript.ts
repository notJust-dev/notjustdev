import { useEffect, RefObject } from 'react';

const useScript = (
  url: string,
  ref: RefObject<HTMLDivElement>,
  data: { [k: string]: string } = {},
) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    Object.keys(data).forEach((key) => {
      script.dataset[key] = data[key];
    });

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      if (ref?.current?.firstChild === script) {
        ref?.current?.removeChild(script);
      }
    };
  }, [url, ref, data]);
};

export default useScript;
