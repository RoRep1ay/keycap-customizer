import { Dispatch, SetStateAction } from "react";

type CustomizerProps = {
  color: string;
  colorChange: Dispatch<SetStateAction<string>>;
  frameColor: string;
  frameColorChange: Dispatch<SetStateAction<string>>;
  image?: string;
  imageChange: Dispatch<SetStateAction<string | undefined>>;
};

export const Customizer = (
  {
    color,
    colorChange,
    frameColor,
    frameColorChange,
    imageChange,
  }: CustomizerProps
) => {
  // TODO: When image is selected, then color selected, then same image selected image is not update
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      imageChange(imageUrl);
    }
  };
  return <div className="flex flex-col gap-4 w-[300px] p-4 rounded-xl shadow-md bg-white">
    {/* Frame Color */}
    <div className="flex items-center gap-3">
      <label htmlFor="frameColor" className="font-medium text-gray-700">
        Frame Color:
      </label>
      <input
        type="color"
        id="frameColor"
        value={frameColor}
        onChange={(el) => frameColorChange(el.target.value)}
        className="h-8 w-12 border border-gray-300 rounded cursor-pointer"
      />
    </div>
    {/* Color Picker */}
    <div className="flex items-center gap-3">
      <label htmlFor="color" className="font-medium text-gray-700">
        Color:
      </label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(el) => colorChange(el.target.value)}
        className="h-8 w-12 border border-gray-300 rounded cursor-pointer"
      />
    </div>

    {/* Image Picker */}
    <div className="flex items-center gap-3">
      <label htmlFor="image" className="font-medium text-gray-700">
        Image:
      </label>
      <input
        type="file"
        id="image"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  </div>
}
