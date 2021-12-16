import React from 'react';

export default function Layout(props) {
  return (
    <>
      <div className="h-screen px-12 py-12">
        <div className="w-full h-full">
          {props.children}
        </div>
      </div>
    </>
  )
}
