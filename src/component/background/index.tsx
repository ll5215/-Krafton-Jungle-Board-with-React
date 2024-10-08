import { BackgroundImageContainer } from "./styled";
import Image from "next/image";

export default function BackgroundImageComponent() {
    return (
        <BackgroundImageContainer>
        <Image
          src="/images/main_image.png" 
          alt="Main background image"
          layout="fill"
          objectFit="cover"
        />
      </BackgroundImageContainer>
    )
}