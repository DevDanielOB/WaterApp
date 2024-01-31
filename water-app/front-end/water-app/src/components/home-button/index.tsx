import React, {
  FC,
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

interface HomeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width?: string;
  height?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ComponentType<any>
}

const HomeButton: FC<HomeButtonProps> = (
  (
    {
  title,
  width,
  height,
  onClick,
  icon
}) => {

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) { onClick(e) }
  }
    return (
      <button
        className="home-button"
        onClick={handleClick}
        style={{ width, height }}
      >
        {title}
      </button>
    )
  })

export default HomeButton
