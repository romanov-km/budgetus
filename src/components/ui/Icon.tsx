import "./Icon.scss";

interface IconProps {
  name: string; //имя иконки
  size?: number; // размер иконки в px
  className?: string; // дополнительные классы
  color?: string; // цвет иконки
}

export default function Icon({ name, size = 24, className = "" }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      className={`icon ${className}`}
    />
  );
}
