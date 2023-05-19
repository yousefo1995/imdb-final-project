import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import IconButtonIMDB from "../Core/IconButtonIMDB/IconButtonIMDB";

export function ArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IconButtonIMDB
        borderR="4px"
        width="48px"
        height="64px"
        bg="rgb(18, 18, 18, 0.45)"
        hoverBg="rgb(18, 18, 18, 0.45)"
        iconHover="#f5c518"
        iconSize="30px"
      >
        <ArrowForwardIosRoundedIcon />
      </IconButtonIMDB>
    </div>
  );
}

export function ArrowBack(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IconButtonIMDB
        borderR="4px"
        width="48px"
        height="64px"
        bg="rgb(18, 18, 18, 0.45)"
        hoverBg="rgb(18, 18, 18, 0.45)"
        iconHover="#f5c518"
        iconSize="30px"
      >
        <ArrowBackIosRoundedIcon />
      </IconButtonIMDB>
    </div>
  );
}
