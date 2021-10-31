// Interface
interface ILabel {
  children?: any;
  className?: string;
  htmlFor?: any;
  noMargin?: boolean;
}

interface ILabelWithValue {
  label: string;
  value: any;
  noMargin?: boolean;
}

// Implementation
function Label(props: ILabel) {
  let { children, htmlFor, className, noMargin } = props;

  return (
    <label
      htmlFor={htmlFor}
      className={"u-label-text " + (noMargin ? "" : " mb-2 ") + " " + (className ? className : "")}
    >
      {children}
    </label>
  );
}

function LabelWithValue(props: ILabelWithValue) {
  let { label, value, noMargin } = props;

  return (
    <div className={"flex flex-row space-x-2 flex-wrap " + (noMargin ? "" : " pt-2")}>
      <label className={"u-label-text align-baseline " + (noMargin ? "" : " mb-2 ")}>{label}</label>
      <div className="text-left">{value}</div>
    </div>
  );
}

export { Label, LabelWithValue };
