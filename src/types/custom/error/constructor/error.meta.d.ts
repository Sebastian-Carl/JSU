/**
 *  Default meta data of custom error constructors.
 */
type BaseMeta<OtherArguments extends {} = {}> = {
    Message: string;
    Context?: { Message?: string; Emitter: string };
    Args?: { Id: string } & OtherArguments;
    Guide?: string;
}

type ArgumentErrorMeta = BaseMeta<{ ReceivedArgument: string, ExpectedArguments: string[] }>;
type IndexOutOfBoundsErrorMeta = BaseMeta<{ Index: number, MaxBound: number }>;
type InvalidPropertyErrorMeta = BaseMeta<{ PropertyId: string }>;
type MissingParameterErrorMeta = BaseMeta<{ Value: string }>;
type MissingPropertyErrorMeta = BaseMeta<{ PropertyId: string }>;
type NoSuchElementTagErrorMeta = BaseMeta<{ Tag: string, TagOf: "HTMLElement" | "MathMLElement" | "SVGElement" }>;
type NotSupportedErrorMeta = BaseMeta;
type UnknownPropertyErrorMeta = BaseMeta<{ PropertyId: string }>;
