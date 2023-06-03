import { Stack } from "@mui/material";
import IconButtonIMDB from "../Core/IconButtonIMDB/IconButtonIMDB";
export function Arrow({
  onClick,
  children,
  buttonHeight,
  ButtonsDisplay,
  currentSlide,
  isLeft = true,
  slideCount,
  slidesToShow,
}) {
  return (
    <>
      {(isLeft
        ? currentSlide !== 0
        : currentSlide !== slideCount - slidesToShow) && (
        <Stack
          onClick={onClick}
          display={ButtonsDisplay}
          sx={{
            position: "absolute",
            bottom: buttonHeight,
            left: isLeft && "0",
            right: !isLeft && "0",
            zIndex: 1,
          }}
          // style={{
          //   bottom: buttonHeight,
          //   position: "absolute",
          //   left: isLeft && "0",
          //   right: !isLeft && "0",
          //   zIndex: 1,
          // }}
        >
          <IconButtonIMDB
            borderR="4px"
            showBorder={true}
            width="48px"
            height="64px"
            bg="rgb(18, 18, 18, 0.45)"
            hoverBg="rgb(18, 18, 18, 0.45)"
            iconColor="#fff"
            iconHover="#f5c518"
            iconSize="30px"
          >
            {children}
          </IconButtonIMDB>
        </Stack>
      )}
    </>
  );
}
