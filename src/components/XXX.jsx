import React from 'react';
import { useRef } from 'react';
export const XXX = () => {
  const shlyapaXXXref = useRef();
  return (
    <>
      <input ref={shlyapaXXXref} />
      <button onClick={() => console.log(shlyapaXXXref.current.value)}>
        KNIPKAXXX
      </button>
    </>
  );
};
