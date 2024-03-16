const Input = ({ label, name, type, value, onChange, error }) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-danger">{error}</p>}
      </div>
    );
  };
  
  export default Input;
  