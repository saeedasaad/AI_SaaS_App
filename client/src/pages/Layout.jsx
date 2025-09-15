import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
}
