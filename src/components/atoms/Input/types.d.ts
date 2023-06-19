export interface InputProps {
  type: "text" | "number";
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  min?: number;
  max?: number;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
