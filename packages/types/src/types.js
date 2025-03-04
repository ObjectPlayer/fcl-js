const type = (label, asArgument, asInjection) => ({
  label,
  asArgument,
  asInjection,
})

const isArray = d => Array.isArray(d)
const isObj = d => typeof d === "object"
const isNull = d => d == null
const isBoolean = d => typeof d === "boolean"
const isNumber = d => typeof d === "number"
const isInteger = d => Number.isInteger(d)
const isString = d => typeof d === "string"

const throwTypeError = msg => {
  throw new Error("Type Error: " + msg)
}

const numberValuesDeprecationNotice = type => {
  console.error(
    `
          %c@onflow/types Deprecation Notice
          ========================

          Passing in Number as value for ${type} is deprecated and will cease to work in future releases of @onflow/types.
          Going forward, use String as value for ${type}. 
          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0002-[U]Int*-and-Word*-as-Number

          =======================
        `
      .replace(/\n\s+/g, "\n")
      .trim(),
    "font-weight:bold;font-family:monospace;"
  )
}

export const Identity = type(
  "Identity",
  v => v,
  v => v
)

export const UInt = type(
  "UInt",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt")
      return {
        type: "UInt",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt",
        value: v,
      }
    }
    throwTypeError("Expected Positive Integer for type Unsigned Int")
  },
  v => v
)

export const Int = type(
  "Int",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int")
      return {
        type: "Int",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int",
        value: v,
      }
    }
    throwTypeError("Expected Integer for type Int")
  },
  v => v
)

export const UInt8 = type(
  "UInt8",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt8")
      return {
        type: "UInt8",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt8",
        value: v,
      }
    }
    throwTypeError("Expected integer for UInt8")
  },
  v => v
)

export const Int8 = type(
  "Int8",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int8")
      return {
        type: "Int8",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int8",
        value: v,
      }
    }
    throwTypeError("Expected positive integer for Int8")
  },
  v => v
)

export const UInt16 = type(
  "UInt16",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt16")
      return {
        type: "UInt16",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt16",
        value: v,
      }
    }
    throwTypeError("Expected integer for UInt16")
  },
  v => v
)

export const Int16 = type(
  "Int16",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int16")
      return {
        type: "Int16",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int16",
        value: v,
      }
    }
    throwTypeError("Expected positive integer for Int16")
  },
  v => v
)

export const UInt32 = type(
  "UInt32",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt32")
      return {
        type: "UInt32",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt32",
        value: v,
      }
    }
    throwTypeError("Expected integer for UInt32")
  },
  v => v
)

export const Int32 = type(
  "Int32",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int32")
      return {
        type: "Int32",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int32",
        value: v,
      }
    }
    throwTypeError("Expected positive integer for Int32")
  },
  v => v
)

export const UInt64 = type(
  "UInt64",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt64")
      return {
        type: "UInt64",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt64",
        value: v,
      }
    }
    throwTypeError("Expected integer for UInt64")
  },
  v => v
)

export const Int64 = type(
  "Int64",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int64")
      return {
        type: "Int64",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int64",
        value: v,
      }
    }
    throwTypeError("Expected positive integer for Int64")
  },
  v => v
)

export const UInt128 = type(
  "UInt128",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt128")
      return {
        type: "UInt128",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt128",
        value: v,
      }
    }
    throwTypeError("Expected integer for UInt128")
  },
  v => v
)

export const Int128 = type(
  "Int128",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int128")
      return {
        type: "Int128",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int128",
        value: v,
      }
    }
    throwTypeError("Expected positive integer for Int128")
  },
  v => v
)

export const UInt256 = type(
  "UInt256",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("UInt256")
      return {
        type: "UInt256",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "UInt256",
        value: v,
      }
    }
    throwTypeError("Expected integer for UInt256")
  },
  v => v
)

export const Int256 = type(
  "Int256",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Int256")
      return {
        type: "Int256",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Int256",
        value: v,
      }
    }
    throwTypeError("Expected integer for Int256")
  },
  v => v
)

export const Word8 = type(
  "Word8",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Word8")
      return {
        type: "Word8",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Word8",
        value: v,
      }
    }
    throwTypeError("Expected positive number for Word8")
  },
  v => v
)

export const Word16 = type(
  "Word16",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Word16")
      return {
        type: "Word16",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Word16",
        value: v,
      }
    }
    throwTypeError("Expected positive number for Word16")
  },
  v => v
)

export const Word32 = type(
  "Word32",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Word32")
      return {
        type: "Word32",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Word32",
        value: v,
      }
    }
    throwTypeError("Expected positive number for Word32")
  },
  v => v
)

export const Word64 = type(
  "Word64",
  v => {
    if (isNumber(v) && isInteger(v)) {
      numberValuesDeprecationNotice("Word64")
      return {
        type: "Word64",
        value: v.toString(),
      }
    }
    if (isString(v)) {
      return {
        type: "Word64",
        value: v,
      }
    }
    throwTypeError("Expected positive number for Word64")
  },
  v => v
)

const UFix64AndFix64NumberDeprecationNotice = () => {
  console.error(
    `
          %c@onflow/types Deprecation Notice
          ========================

          Passing in Numbers as values for Fix64 and UFix64 types is deprecated and will cease to work in future releases of @onflow/types.
          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number

          =======================
        `
      .replace(/\n\s+/g, "\n")
      .trim(),
    "font-weight:bold;font-family:monospace;"
  )
}

export const UFix64 = type(
  "UFix64",
  v => {
    if (isString(v)) {
      const vParts = v.split(".")
      if (vParts.length !== 2) {
        throwTypeError(
          `Expected one decimal but found ${vParts.length} in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`
        )
      }
      if (vParts[1].length == 0 || vParts[1].length > 8) {
        throwTypeError(
          `Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ${vParts[1].length} digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`
        )
      }

      return {
        type: "UFix64",
        value: v,
      }
    } else if (isNumber(v)) {
      UFix64AndFix64NumberDeprecationNotice()
      return {
        type: "UFix64",
        value: v.toString(),
      }
    }
    throwTypeError("Expected String for UFix64")
  },
  v => v
)

export const Fix64 = type(
  "Fix64",
  v => {
    if (isString(v)) {
      const vParts = v.split(".")
      if (vParts.length !== 2) {
        throwTypeError(
          `Expected one decimal but found ${vParts.length} in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`
        )
      }
      if (vParts[1].length == 0 || vParts[1].length > 8) {
        throwTypeError(
          `Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ${vParts[1].length} digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers`
        )
      }

      return {
        type: "Fix64",
        value: v,
      }
    } else if (isNumber(v)) {
      UFix64AndFix64NumberDeprecationNotice()
      return {
        type: "Fix64",
        value: v.toString(),
      }
    }
    throwTypeError("Expected String for Fix64")
  },
  v => v
)

export const String = type(
  "String",
  v => {
    if (isString(v))
      return {
        type: "String",
        value: v,
      }
    throwTypeError("Expected String for type String")
  },
  v => v
)

export const Character = type(
  "Character",
  v => {
    if (isString(v))
      return {
        type: "Character",
        value: v,
      }
    throwTypeError("Expected Character for type Character")
  },
  v => v
)

export const Bool = type(
  "Bool",
  v => {
    if (isBoolean(v))
      return {
        type: "Bool",
        value: v,
      }
    throwTypeError("Expected Boolean for type Bool")
  },
  v => v
)

export const Address = type(
  "Address",
  v => {
    if (isString(v))
      return {
        type: "Address",
        value: v,
      }
    throwTypeError("Expected Address for type Address")
  },
  v => v
)

export const Void = type(
  "Void",
  v => {
    if (!v || isNull(v))
      return {
        type: "Void",
      }
    throwTypeError("Expected Void for type Void")
  },
  v => v
)

export const Optional = children =>
  type(
    "Optional",
    v => ({
      type: "Optional",
      value: isNull(v) ? null : children.asArgument(v),
    }),
    v => v
  )

export const Reference = type(
  "Reference",
  v => {
    if (isObj(v))
      return {
        type: "Reference",
        value: v,
      }
    throwTypeError("Expected Object for type Reference")
  },
  v => v
)

export const _Array = (children = []) =>
  type(
    "Array",
    v => {
      return {
        type: "Array",
        value: isArray(children)
          ? children.map((c, i) => c.asArgument(v[i]))
          : v.map(x => children.asArgument(x)),
      }
    },
    v => v
  )

export {_Array as Array}

export const Dictionary = (children = []) =>
  type(
    "Dictionary",
    v => {
      if (isObj(v))
        return {
          type: "Dictionary",
          value: isArray(children)
            ? children.map((c, i) => ({
                key: c.key.asArgument(v[i].key),
                value: c.value.asArgument(v[i].value),
              }))
            : isArray(v)
            ? v.map(x => ({
                key: children.key.asArgument(x.key),
                value: children.value.asArgument(x.value),
              }))
            : [
                {
                  key: children.key.asArgument(v.key),
                  value: children.value.asArgument(v.value),
                },
              ],
        }
      throwTypeError("Expected Object for type Dictionary")
    },
    v => v
  )

export const Event = (id, fields = []) =>
  type(
    "Event",
    v => {
      if (isObj(v))
        return {
          type: "Event",
          value: {
            id: id,
            fields: isArray(fields)
              ? fields.map((c, i) => ({
                  name: v.fields[i].name,
                  value: c.value.asArgument(v.fields[i].value),
                }))
              : v.fields.map(x => ({
                  name: x.name,
                  value: fields.value.asArgument(x.value),
                })),
          },
        }
      throwTypeError("Expected Object for type Event")
    },
    v => v
  )

export const Resource = (id, fields = []) =>
  type(
    "Resource",
    v => {
      if (isObj(v))
        return {
          type: "Resource",
          value: {
            id: id,
            fields: isArray(fields)
              ? fields.map((c, i) => ({
                  name: v.fields[i].name,
                  value: c.value.asArgument(v.fields[i].value),
                }))
              : v.fields.map(x => ({
                  name: x.name,
                  value: fields.value.asArgument(x.value),
                })),
          },
        }
      throwTypeError("Expected Object for type Resource")
    },
    v => v
  )

export const Struct = (id, fields = []) =>
  type(
    "Struct",
    v => {
      if (isObj(v))
        return {
          type: "Struct",
          value: {
            id: id,
            fields: isArray(fields)
              ? fields.map((c, i) => ({
                  name: v.fields[i].name,
                  value: c.value.asArgument(v.fields[i].value),
                }))
              : v.fields.map(x => ({
                  name: x.name,
                  value: fields.value.asArgument(x.value),
                })),
          },
        }
      throwTypeError("Expected Object for type Struct")
    },
    v => v
  )

export const Path = type(
  "Path",
  v => {
    if (isObj(v)) {
      if (!isString(v.domain)) {
        throwTypeError(
          `Expected a string for the Path domain but found ${v.domain}. Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path`
        )
      }

      if (
        !(
          v.domain === "storage" ||
          v.domain === "private" ||
          v.domain === "public"
        )
      ) {
        throwTypeError(
          `Expected either "storage", "private" or "public" as the Path domain but found ${v.domain}. Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path`
        )
      }

      if (!isString(v.identifier)) {
        throwTypeError(
          `Expected a string for the Path identifier but found ${v.identifier}. Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path`
        )
      }

      return {
        type: "Path",
        value: {
          domain: v.domain,
          identifier: v.identifier,
        },
      }
    }
    throwTypeError("Expected Object for type Path")
  },
  v => v
)
