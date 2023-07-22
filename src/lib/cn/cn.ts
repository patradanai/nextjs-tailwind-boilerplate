import { twMerge } from 'tailwind-merge'
import className, { ArgumentArray } from 'classnames'

/**
 * Merge ClassName with TwMerge
 * @param {ArgumentArray[]} classLists - ClassNameValue[]
 */
export const cn = (...classLists: ArgumentArray[]) =>
    twMerge(className(classLists))
