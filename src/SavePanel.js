import React, { Component } from "react";
import { Button } from ".";

export default class SavePanel extends Component {
  render() {
    const {
      somethingChanged,
      saveError,
      savingChanges,
      saved,
      saveDisabledText,
      saveText,
      className
    } = this.props;

    return (
      <div
        className={
          "save-panel z-3 py-4 px-4 -ml-4 shadow-inner fixed bottom-0 bg-white justify-between flex items-center " +
          (className ? className : "")
        }
      >
        {saveError && (
          <div className="inline-error" style={{ marginRight: "10px" }}>
            {saveError}
          </div>
        )}
        {!savingChanges && this.props.cancelChanges && (
          <Button.Cancel id="cancel_button" title="Cancel" onClick={this.props.cancelChanges} />
        )}
        <div className="flex flex-row space-x-4 flex-grow-0 ml-auto">
          <Button.Primary
            className="sm:w-auto w-full"
            id="save_button"
            onClick={this.props.saveChanges}
            disabled={savingChanges || !somethingChanged || Boolean(saveDisabledText)}
            hoverTitle={saveDisabledText}
            isLoading={savingChanges}
            title={saved && !somethingChanged ? "Saved" : saveText ? saveText : "Save"}
            icon={saved && !somethingChanged ? "check" : undefined}
            loadingTitle="Saving"
          />
        </div>
      </div>
    );
  }
}
