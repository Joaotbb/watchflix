import { useState } from "react";
import ReactPlayer from "react-player";

import { VideoModal } from "_components/Molecules";

const PlayBtn = (props) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [clipUrl, setClipUrl] = useState("");

  const handleClick = (clipLink) => {
    setShowVideoModal(true);
    setClipUrl(clipLink);
  };

  const { video } = props;
  const clip = "https://www.youtube.com/embed/" + video.videos.results[0]?.key;

  return (
    <>
      <button
        type="button"
        className="flex justify-center items-center bg-secondary-300 hover:bg-secondary-700 text-white/70 transition ease-in duration-200 text-center text-base font-semibold shadow-md w-20 h-12 rounded-md"
        onClick={() => handleClick(clip)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"
          />
        </svg>
      </button>

      {showVideoModal && (
        <VideoModal showModal={showVideoModal} setShowModal={setShowVideoModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <ReactPlayer url={clipUrl} controls />
          </div>
        </VideoModal>
      )}
    </>
  );
};

export default PlayBtn;
