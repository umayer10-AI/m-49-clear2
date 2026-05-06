import React from 'react';

const g = async () => {
  const res = await fetch("http://localhost:5000")
  return res.json()
}

const page = async () => {

  const data = await g()

  return (
    <div>
        <h2>Data: {data.length}</h2>
    </div>
  );
};

export default page;