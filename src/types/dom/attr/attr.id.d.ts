export interface DOMIdOfAPI {
    /**
     *  The current unique `id` value of the element.
     *
     *  ***Note***:
     *   - If the element has no `id`, the value of this property would be '\<NO_ID\>'.
     */
    Value: string;

    /**
     *  Removes the `id` attribute of the element.
     *  @returns The state result of `id` removal process.
     */
    Remove(): boolean;

    /**
     *  Set (or change) a unique `id` attribute of element.
     *
     *  @param id - The new unique `id` of element.
     *  @returns The new or current unique `id` of the element.
     */
    Set(id: string): string;
}
