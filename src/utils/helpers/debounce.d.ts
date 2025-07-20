/**
 * 创建一个防抖函数，该函数在延迟时间内没有再次调用时，才会执行原函数
 * @param func 要防抖的函数
 * @param wait 延迟时间（毫秒）
 * @param immediate 是否立即执行（默认为 false）
 * @returns 防抖后的函数
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number, immediate?: boolean): (...args: Parameters<T>) => ReturnType<T> | undefined;
