interface IInfo {
  width?: number | string;
  height?: number | string;
}

const Info = ({ width, height }: IInfo) => {
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_464_10950)">
        <path
          d="M15.3125 23.4381H24.6875M18.4375 9.37561H21.5625M15.3125 15.6256H20V23.4381M33.75 31.5397H26.25L20 37.7897L13.75 31.5397H6.25C3.66117 31.5397 1.5625 29.441 1.5625 26.8522V6.25061C1.5625 3.66178 3.66117 1.56311 6.25 1.56311H33.75C36.3388 1.56311 38.4375 3.66178 38.4375 6.25061V26.8522C38.4375 29.441 36.3388 31.5397 33.75 31.5397Z"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};

export default Info;
