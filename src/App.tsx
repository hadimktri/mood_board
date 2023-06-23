import Cards from "./Cards";
import { useEffect, useState } from "react";

export interface IImage {
  id: number;
  url: string;
}
const App = () => {
  const [images, setImages] = useState<IImage[]>([]);

  const HandleShifts = (ixd: number, d: string | void) => {
    if (d == "L") {
      images.splice(ixd - 1, 2, images[ixd], images[ixd - 1]);
      setImages([...images]);
    } else {
      images.splice(ixd, 2, images[ixd + 1], images[ixd]);
      setImages([...images]);
    }
  };

  useEffect(() => {
    const images: IImage[] = [];
    const getImages = (n: number) => {
      for (let i = 0; i < n; i++) {
        images.push({
          id: i,
          url: `https://picsum.photos/300/300?sig=${i}`,
        });
        setImages(images);
      }
    };
    getImages(10);
  }, []);
  return <Cards images={images} HandleShifts={HandleShifts} />;
};
export default App;
