export interface SelectProps {
  name?: string;
  value?: string;
  options: string[];
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  ariaLabel?: string;
}
