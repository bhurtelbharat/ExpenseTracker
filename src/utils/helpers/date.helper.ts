/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

import moment from 'moment'

export const formatDate = (date: any) => {
    const temp = new Date(date)
    return moment(temp).format('MMM DD, YYYY')
}

export const formatDateWithTime = (date: any) => {
    const temp = new Date(date)
    return moment(temp).format('MMM DD, YYYY, hh:mm A')
}
