import "../../styles/shared/ActionButton.css"

const ActionButton = (props: any) => {
  return (
    <button className="Action-Button py-1 px-4" onClick={props.Action}>
      {props.Name}
    </button>
  );
};

export default ActionButton;
