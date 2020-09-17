import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export const SideBar = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <ul className='sidenav' id='mobile-demo'>
      <li>
        <a href='sass.html'>Sass</a>
      </li>
      <li>
        <a href='badges.html'>Components</a>
      </li>
      <li>
        <a href='collapsible.html'>Javascript</a>
      </li>
      <li>
        <a href='mobile.html'>Mobile</a>
      </li>
    </ul>
  );
};
