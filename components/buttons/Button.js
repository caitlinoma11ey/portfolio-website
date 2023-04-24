const Button = ({label, type, handleClick}) => {
    const buttonStyle = type ? 'btn__' + type : ''
    return (
        <button className={`btn ${buttonStyle}`} onClick={handleClick}>{label}</button>
    );
  };
  export default Button;