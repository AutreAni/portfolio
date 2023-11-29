import { useEffect, useState } from "react";
import { useRef } from "react";

const Modal = ({
  children,
  close,
  className,
  appearAnimation,
  disappearAnimation,
}) => {
  const [appear, setAppear] = useState(true);
  const modal = useRef();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setAppear(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = (e) => {
    if (e.target === modal.current && e.animationName === disappearAnimation) {
      if (close) close();
    }
  };

  const startClose = () => {
    setAppear(false);
  };

  return (
    <div
      ref={modal}
      className={`modal ${className}`}
      onAnimationEnd={handleClose}
      style={{
        animationName: appear ? appearAnimation : disappearAnimation,
      }}
    >
      {children(startClose)}
    </div>
  );
};

export default Modal;