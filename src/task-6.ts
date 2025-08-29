function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

getFirstElement([1, 2, 3]);
getFirstElement(["a", "b", "c"]);
getFirstElement([true, false, true]);