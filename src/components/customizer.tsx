import { Dispatch, SetStateAction } from "react";

type CustomizerProps = {
  color: string;
  colorChange: Dispatch<SetStateAction<string>>;
  image?: string;
  imageChange: Dispatch<SetStateAction<string | undefined>>;
  setType: Dispatch<SetStateAction<'color' | 'image'>>;
};

export const Customizer = (
  {
    color,
    colorChange,
    imageChange,
    setType,
  }: CustomizerProps
) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType('image');
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      imageChange(imageUrl);
    }
  };
  return <div className="flex flex-col gap-3 w-[300px]">
    <div className="flex gap-3">
      <label htmlFor="color" id="color">Color: </label>

      <input type="color" id="color" value={color} onChange={el => {
        setType('color');
        colorChange(el.target.value);
      }} />
    </div>

    <div className="flex gap-3">
      <label htmlFor="image" id="image-label" className="font-medium text-gray-700">
        Image:
      </label>

      <input
        type="file"
        id="image"
        onChange={handleImageChange}
      />
    </div>
  </div>
}
