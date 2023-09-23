export const Modal = ({ image, toggle }) => {
  return (
    <div className="Overlay" onClick={toggle}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
