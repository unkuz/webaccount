export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time * 1_000))
