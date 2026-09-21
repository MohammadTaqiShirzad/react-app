import React from "react";

const NameInput = () => {
  const [name, setName] = React.useState("");
  return (
    <div className="bg-gray-200 px-20 py-4 flex flex-col items-center">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello {name}</p>
    </div>
  );
};

export default NameInput;
