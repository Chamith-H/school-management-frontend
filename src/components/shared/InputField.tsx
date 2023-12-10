import "../../styles/shared/InputField.css";

const InputField = (props: any) => {
  return (
    <div className="Input-Field mb-2">
      <label>{props.Label}</label>
      <input
        type="text"
        value={props.Value}
        onChange={(e) => props.GetValue(e.target.value)}
        placeholder={props.Placeholder}
      />
    </div>
  );
};

export default InputField;
