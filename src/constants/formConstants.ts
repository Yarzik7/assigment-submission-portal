import type { ILevels } from "@/types/FormState.types";

const levels: ILevels = {
  levels: ["Junior", "Middle", "Senior", "Principle"],
};

const BASE_INPUT_CLASSES: string = "w-full h-[40px] px-[8px] bg-bgSecondary border border-secondary rounded-radius hover:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary";

export { levels, BASE_INPUT_CLASSES };
