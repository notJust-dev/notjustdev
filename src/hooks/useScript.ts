import { useEffect, RefObject } from 'react';

const useScript = (
  src: string,
  id: string,
  data: { [k: string]: string } = {},
  mountOnRef?: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    console.log('script rerender.');
    console.log('Data: ', JSON.stringify({ data, id, src }));
    if (document.getElementById(id)) {
      console.log('Script already exists');
      // TODO should we instead remove it and recreate the script?
      return;
    }

    const script = document.createElement('script');

    script.src = src;
    script.id = id;
    script.async = true;

    Object.keys(data).forEach((key) => {
      script.dataset[key] = data[key];
    });

    if (mountOnRef?.current) {
      mountOnRef.current.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
    console.log(`Script with id ${id} has been setup`);

    // The script losses it's id for some reason. Maybe impacted by Nextjs optimisation
    // return () => {
    //   console.log(`Script with id ${id} has been removed`);
    //   document.getElementById(id)?.remove();
    // if (ref?.current?.firstChild === script) {
    //   ref?.current?.removeChild(script);
    // }
    // };
  }, [data, id, src, mountOnRef]);
};

export default useScript;
