import { ReactNode } from "react";
import "./button.scss";
import { Stack } from "@mui/material";

export interface AppchargeCheckoutProps {
  playerId: string;
  price: number;
  url: string;
  sessionMetaData?: Object;
  width?: string;
  height?: string;
  closeIconColor?: string;
  closeIconRender?: ReactNode;
  onCloseModal?: () => void;
}

function AppchargeCheckout({
  playerId,
  price,
  sessionMetaData,
  width = "450px",
  height = "500px",
  url,
}: AppchargeCheckoutProps) {
  return (
    <Stack
      position='absolute'
      width='100vw'
      height='100vh'
      bgcolor='rgba(0, 0, 0, 0.5)'
      top={0}
      left={0}
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        style={{
          borderRadius: "30px",
          border: "4px solid #66A3FF",
          background: "#1C134F",
          boxShadow: "0px 0px 30px 0px #CFFCFF",
          width: width,
          height: height,
        }}
        position='relative'
        justifyContent='center'
        alignItems='center'
      >
        <iframe
          src={`${url}/?playerId=${playerId}&price=${price}&sessionMetadata=${JSON.stringify(
            sessionMetaData
          )}`}
          title='checkout'
          style={{
            position: "relative",
            zIndex: 300,
            width: "750px",
            height: "530px",
            border: "0px",
            marginTop: -32,
          }}
        ></iframe>
      </Stack>
    </Stack>
  );
}

export default AppchargeCheckout;
