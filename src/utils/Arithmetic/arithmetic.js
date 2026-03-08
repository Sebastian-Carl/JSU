import { DefineProperty, Global } from '../custom/utils/custom.utils.js';
import { IsNullOrUndefined } from '../guards/type/guards.type.js';
import { IsStrEmpty } from '../guards/format/guards.format.js';
import Divide from './operations/operation.divide.js';
import Multiply from './operations/operation.multiply.js';
import Subtract from './operations/operation.subtract.js';
import Sum from './operations/operation.sum.js';

function Arithmetics() {
    const ArithmeticAPI = {};

    for (const Method of [Divide, Multiply, Subtract, Sum]) {
        const Key = Method.name;
        if (!IsNullOrUndefined(Key) && !IsStrEmpty(Key) && !Object.hasOwn(ArithmeticAPI, Key))
            DefineProperty(ArithmeticAPI, Key, Method, "med");
    }

    Global("Arithmetic", ArithmeticAPI, "soft");
}
Arithmetics();
