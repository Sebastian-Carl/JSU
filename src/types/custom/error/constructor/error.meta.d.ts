/**
 *  Default meta data of custom error constructors.
 */
export type BaseMeta<OtherArguments extends {} = {}> = {
    Message: string;
    Context?: { Message?: string; Emitter: string };
    Args?: { Id: string } & OtherArguments;
    Guide?: string;
}

export type ArgumentErrorMeta = BaseMeta<{ ReceivedArgument: string, ExpectedArguments: string[] }>;
export type IndexOutOfBoundsErrorMeta = BaseMeta<{ Index: number, MaxBound: number }>;
export type InvalidPropertyErrorMeta = BaseMeta<{ PropertyId: string }>;
export type MissingParameterErrorMeta = BaseMeta<{ Value: string }>;
export type MissingPropertyErrorMeta = BaseMeta<{ PropertyId: string }>;
export type NoSuchElementTagErrorMeta = BaseMeta<{ Tag: string, TagOf: "HTMLElement" | "MathMLElement" | "SVGElement" }>;
export type NotSupportedErrorMeta = BaseMeta;
export type UnknownPropertyErrorMeta = BaseMeta<{ PropertyId: string }>;
