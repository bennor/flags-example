import { UI_TEXT } from "../../constants/strings";

export function BrutalistMode() {
  return (
    <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6">
      <h3 className="text-2xl font-black uppercase mb-6 text-black dark:text-white">
        {UI_TEXT.BRUTALIST_MODE}
      </h3>
      <p className="text-lg font-bold leading-tight text-black dark:text-white">
        {UI_TEXT.BRUTALIST_TAGLINE}
      </p>
      <p className="mt-4 font-bold text-gray-700 dark:text-gray-300">
        {UI_TEXT.BRUTALIST_DESCRIPTION}
      </p>
    </div>
  );
}
