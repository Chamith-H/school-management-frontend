import "../../styles/shared/SubmitButton.css";

const SubmitButton = (props: any) => {
  return (
    <button className="Submit-Button" type="submit">
      {props.Title}
    </button>
  );
};

export default SubmitButton;
