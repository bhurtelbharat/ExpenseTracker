/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const getLabel = (v: any) => {
    if (!v.firstName?.length && !v.lastName?.length) {
        return v.username
    } else {
        return v.firstName + ' ' + v.lastName
    }
}
