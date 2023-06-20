export interface InputProps {
  type: "text" | "number";
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  min?: number;
  max?: number;
  maxLength?: number;
  ariaLabel?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
