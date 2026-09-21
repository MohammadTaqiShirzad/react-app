const Card = ({ product }) => {
  return (
    <div className="rounded-2xl hover:-translate-y-2 shadow-2xl shadow-gray-700 transition-all duration-300 ease-in-out">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <p className="text-lg font-semibold">{product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        <div className="mt-4 flex justify-between items-center w-full">
          <button
            type="button"
            className="bg-blue-900 rounded-2xl px-4 py-1.5 flex justify-center items-center text-white"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
