const IcArrowDown = (props: any) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color || "#fff"}
      style={{
        transition: "all .2s ease",
      }}
    >
      <path d="M9.547 7.268L16 0 8 4 0 0l6.453 7.268A1.996 1.996 0 0 0 8 8c.623 0 1.18-.285 1.547-.732z"></path>
    </svg>
  );
};

export default IcArrowDown;
