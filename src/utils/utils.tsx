import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: (string | null)[]) => {
    return twMerge(clsx(inputs))
}