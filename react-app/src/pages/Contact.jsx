import React from "react";
import Card from "../components/Card";

const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl font-black">Contact</h1>
      <p className="text-lg mt-4 text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum non
        recusandae, velit doloremque cumque, eveniet, alias voluptatibus
        aspernatur iure quisquam rem. Quisquam, doloremque.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <Card
          title="Web Development"
          description="Build useful websites."
          imageUrl="/web.jpg"
        />

        <Card
          title="Graphic Design"
          description="Create clear visual designs."
          imageUrl="/design.jpg"
        />

        <Card
          title="Digital Skills"
          description="Use computers confidently."
          imageUrl="/skills.jpg"
        />
      </div>
    </div>
  );
};

export default Contact;
