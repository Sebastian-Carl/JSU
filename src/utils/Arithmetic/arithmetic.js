import { DefineProperty, Global } from '../custom/utils/custom.utils.js';
import { IsNullOrUndefined } from '../guards/data-types/data-types.js';
import { HasProperty, IsStrEmpty } from '../guards/formats/formats.js';
import Divide from './operations/operation.divide.js';
import Multiply from './operations/operation.multiply.js';
import Subtract from './operations/operation.subtract.js';
import Sum from './operations/operation.sum.js';

function Arithmetics() {
    const ArithmeticAPI = {};

    for (const Method of [Divide, Multiply, Subtract, Sum]) {
        const Key = Method.name;
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !HasProperty(ArithmeticAPI, Key))
            DefineProperty(ArithmeticAPI, Key, Method, "med");
    }

    Global("Arithmetic", ArithmeticAPI, "soft");
}
Arithmetics();
