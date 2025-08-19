// MoviePlayer.jsx
const MoviePlayer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex items-center justify-center">
      <iframe
        src="https://drive.google.com/file/d/11Q7CmEceeuSxwN7eDpQggvCwBfWXs_5B/preview"
        width="100%"
        height="600"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default MoviePlayer;
