import { StyledIconButton } from "./style";

const IconButtonIMDB = ({
  children,
  iconSize,
  borderR,
  showborder,
  iconColor,
  width,
  height,
  bg,
  hoverBg,
  iconHover,
  ...res
}) => {
  return (
    <StyledIconButton
      iconSize={iconSize}
      borderR={borderR}
      iconColor={iconColor}
      width={width}
      height={height}
      bg={bg}
      hoverBg={hoverBg}
      iconHover={iconHover}
      {...res}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButtonIMDB;
