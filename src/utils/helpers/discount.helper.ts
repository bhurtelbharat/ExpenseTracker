/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const getDiscountBadge = (disc: any) => {
    return (
        disc.value +
        (disc.type === 'flat' ? ` ${disc.currency} FLAT` : '%') +
        (disc.above > 0 ? ` above ${disc.above}` : '' + ' off')
    )
}
