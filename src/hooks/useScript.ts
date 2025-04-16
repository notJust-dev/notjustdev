import { useEffect, RefObject } from 'react';

const useScript = (
  src: string,
  id: string,
  data: { [k: string]: string } = {},
  mountOnRef?: RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (mountOnRef?.current?.hasChildNodes()) {
      // mountOnRef is not empty. The script was already added.
      return;
    }

    const script = document.createElement('script');

    script.src = src;
    script.id = id;
    script.async = true;

    Object.keys(data).forEach((key) => {
      script.dataset[key] = data[key];
    });

    if (!mountOnRef?.current) {
      document.body.appendChild(script);
    } else {
      mountOnRef.current.appendChild(script);
    }
  }, [data, id, src, mountOnRef]);
};

export default useScript;
