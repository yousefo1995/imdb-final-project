import { Stack } from "@mui/material";
import IconButtonIMDB from "../Core/IconButtonIMDB/IconButtonIMDB";
export function BackArrow({
  onClick,
  children,
  buttonHeight,
  ButtonsDisplay,
  currentSlide,
}) {
  return (
    <>
      {currentSlide !== 0 && (
        <Stack
          onClick={onClick}
          display={ButtonsDisplay}
          style={{
            bottom: buttonHeight,
            position: "absolute",
            left: "0",
            zIndex: 1,
          }}
        >
          <IconButtonIMDB
            borderR="4px"
            showBorder={true}
            width="48px"
            height="64px"
            bg="rgb(18, 18, 18, 0.45)"
            hoverBg="rgb(18, 18, 18, 0.45)"
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

export function NextArrow({
  onClick,
  children,
  buttonHeight,
  ButtonsDisplay,
  slideCount,
  currentSlide,
  slidesToShow,
}) {
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <Stack
          onClick={onClick}
          display={ButtonsDisplay}
          style={{
            bottom: buttonHeight,
            position: "absolute",
            right: "0",
            zIndex: 1,
          }}
        >
          <IconButtonIMDB
            borderR="4px"
            showBorder={true}
            width="48px"
            height="64px"
            bg="rgb(18, 18, 18, 0.45)"
            hoverBg="rgb(18, 18, 18, 0.45)"
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
