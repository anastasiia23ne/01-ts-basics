function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
getFirstElement<boolean>([true, false, true]);