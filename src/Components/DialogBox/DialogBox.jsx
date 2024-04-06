import "./DialogBox.css";

export default function DialogBox({
  message,
  executeFunc,
  param,
  toggleDialogBox,
}) {
  function handleSubmit() {
    console.log("Yes");
    executeFunc(param);
    toggleDialogBox(false);
  }

  function handleClose() {
    console.log("No");
    toggleDialogBox(false);
  }

  return (
    <div className="overlay">
      <div id="dialog-box">
        <h3>{message}</h3>
        <div>
          <button
            onClick={handleSubmit}
            className="dialog-footer-btn"
            id="dialog-footer-btn-yes"
          >
            Yes
          </button>
          <button
            className="dialog-footer-btn"
            id="dialog-footer-btn-no"
            onClick={handleClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
