/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const getInitials = (str1 = '', str2 = '') => {
    return str1[0] ?? 'N/' + str2[0] ?? 'A'
}

export const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
