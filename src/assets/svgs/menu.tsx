interface IMenu {
  width?: number | string;
  height?: number | string;
}

const Menu = ({ width, height }: IMenu) => {
  return (
    <svg
      width={width || 43}
      height={height || 43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="4.5"
        width="15"
        height="15"
        rx="2.5"
        stroke="white"
        strokeWidth="3"
      />
      <rect
        x="1.5"
        y="26.5"
        width="15"
        height="15"
        rx="2.5"
        stroke="white"
        strokeWidth="3"
      />
      <rect
        x="31"
        y="1.39342"
        width="15"
        height="15"
        rx="2.5"
        transform="rotate(45 31 1.39342)"
        stroke="white"
        strokeWidth="3"
      />
      <rect
        x="23.5"
        y="26.5"
        width="15"
        height="15"
        rx="2.5"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Menu;
