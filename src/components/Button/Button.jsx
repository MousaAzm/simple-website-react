import "./Button.css";

const styles = [
  "btn-blue",
  "btn-yellow",
  "btn-green",
  "btn-red",
  "btn-blue-btn-outline",
  "btn-yellow-btn-outline",
  "btn-green-btn-outline",
  "btn-red-btn-outline",
]

const sizes = [
  "btn-medium",
  "btn-large"
]

export const Button = ({children, type, onClick, btnSize, btnStyle}) => {
  
  const checkBtnStyle = styles.includes(btnStyle) ? btnStyle : styles[0];
  const checkBtnSize = sizes.includes(btnSize) ? btnSize: sizes[0];

  return (  
    <>   
      <button className={`btn-btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
};
