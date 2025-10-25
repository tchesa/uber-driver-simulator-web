import type { PropsWithChildren } from "react";
import classnames from "classnames";
import styles from "./button.module.css";

type Props = {
  onClick?: () => void;
  className?: string;
  id?: string;
};

const Button = ({
  id,
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      id={id}
      type="button"
      className={classnames(styles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
