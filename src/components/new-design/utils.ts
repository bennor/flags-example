export const getFlagStatusStyle = (isEnabled: boolean) => {
  return isEnabled
    ? "bg-black dark:bg-white text-white dark:text-black"
    : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
};
