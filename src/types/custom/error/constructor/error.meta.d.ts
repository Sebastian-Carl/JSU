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
type InvalidPropertyError = BaseMeta<{ PropertyId: string }>;
type MissingParameterError = BaseMeta<{ Value: string }>;
type MissingPropertyError = BaseMeta<{ PropertyId: string }>;
type NoSuchElementTagError = BaseMeta<{ Tag: string, TagOf: "HTMLElement" | "MathMLElement" | "SVGElement" }>;
type NotSupportedError = BaseMeta;
type UnknownPropertyError = BaseMeta<{ PropertyId: string }>;
