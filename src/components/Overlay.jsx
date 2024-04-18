import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            AttractAI
            {/* <div className="spinner">
              <div className="spinner__image" />
            </div> */}
          </h1>
          <p className="intro__scroll">👇Scroll down to learn about AttractAI👇</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <p className="outro__text">Embark on an magical journey with AttractAI!</p>
        <button
          className="explore"
          onClick={() => {
            window.location.href = 'https://forms.gle/CuetCdKbnMyYotFF9';
          }}
        >
          Join Waitlist
      </button>
      </div>
    </div>
  );
};
