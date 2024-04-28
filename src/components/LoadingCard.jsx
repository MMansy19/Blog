function LoadingCard() {
  return (
    <div className="max-w-xl p-4 bg-white rounded-lg shadow-lg animate-pulse min-w-72">
      <div className="w-full mb-2 bg-gray-300 rounded h-36"></div>
      <div className="w-1/3 h-8 mb-2 bg-gray-300 rounded"></div>
      <div className=" w-4/5 h-16 mb-2 bg-gray-300 rounded"></div>
      <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
    </div>
  );
}

export default LoadingCard;
