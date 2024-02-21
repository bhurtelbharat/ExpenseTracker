/*
 * Copyright (c) 2024 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const filterVariantsByAttributes = (variants: any, attributes: any) => {
    const validAttributeOptions = attributes.reduce((acc: any, attr: any) => {
        acc[attr.title] = attr.options.map((v: string) => v.toLowerCase())
        return acc
    }, {})

    const isValidCombination = (combination: any) => {
        return Object.keys(combination).every(
            key =>
                validAttributeOptions[key] &&
                validAttributeOptions[key].includes(combination[key]),
        )
    }

    const isVariantValid = (variant: any) => {
        const variantValue = variant.value
        const attributeKeysInVariant = Object.keys(variantValue)
        return (
            attributeKeysInVariant.length === attributes.length &&
            isValidCombination(variantValue) &&
            attributeKeysInVariant.every((key: string) => {
                return (
                    attributes.some(
                        (attr: any) =>
                            attr.title.toLowerCase() === key.toLowerCase(),
                    ) &&
                    attributes
                        .find(
                            (attr: any) =>
                                attr.title.toLowerCase() === key.toLowerCase(),
                        )
                        .options.map((v: string) => v.toLowerCase())
                        .includes(variantValue[key].toLowerCase())
                )
            })
        )
    }

    const filteredVariants = variants.filter((variant: any) => {
        return (
            isVariantValid(variant) &&
            Object.keys(variant.value).length === attributes.length
        )
    })

    return removeDuplicateVariants(filteredVariants)
}

export const removeDuplicateVariants = (variants: any) => {
    const seenValues = new Set()

    return variants.filter((variant: any) => {
        const variantValueString = JSON.stringify(variant.value)

        // If the value is not seen before, add it to the set and keep the variant
        if (!seenValues.has(variantValueString)) {
            seenValues.add(variantValueString)
            return true
        }

        // If the value is seen before, only keep the variant with an ID
        return variant.id !== undefined && variant.id !== null
    })
}

export const isHexColor = (str: string) => {
    // Hex color code pattern
    const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/

    // Check if the string matches the pattern
    return hexColorRegex.test(str)
}
