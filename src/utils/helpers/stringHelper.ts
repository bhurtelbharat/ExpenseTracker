/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const formatName = (firstName: string, lastName: string) => {
    return !!firstName && !!lastName
        ? (
              firstName.charAt(0).toUpperCase() +
              firstName.slice(1) +
              ' ' +
              lastName.charAt(0).toUpperCase() +
              lastName.slice(1)
          ).trim()
        : '-'
}
