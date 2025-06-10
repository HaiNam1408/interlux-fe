interface IFloorPlan {
  width?: number | string;
  height?: number | string;
}

const FloorPlan = ({ width, height }: IFloorPlan) => {
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 14V15.5H18H21V12.5H19.5V3H36C36.5523 3 37 3.44772 37 4V12.5H28V15.5H37V22C37 22.5523 36.5523 23 36 23H24H21V26V29H24V26H27H36C38.2091 26 40 24.2091 40 22V15.5V14V12.5V4C40 1.79086 38.2091 0 36 0H19.5H18H16.5H4C1.79086 0 0 1.79086 0 4V22.5V24V25.5V36C0 38.2091 1.79086 40 4 40H20C22.2091 40 24 38.2091 24 36V35H21V36C21 36.5523 20.5523 37 20 37H4C3.44772 37 3 36.5523 3 36V25.5H9.5V28H12.5V24V22.5H11H3V4C3 3.44772 3.44772 3 4 3H16.5V14Z"
        fill="white"
      />
    </svg>
  );
};

export default FloorPlan;
