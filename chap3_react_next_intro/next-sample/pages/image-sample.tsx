import { NextPage } from "next";
import Image from "next/image";
import AnimalImage from "../public/animal.jpg"

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      {/* <img src="animal.jpg" /> */}
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={AnimalImage} placeholder={'blur'} alt="" />
      <p>Imageで表示した場合は事前に描画エリアが確保される</p>
    </div>
  )
}

export default ImageSample