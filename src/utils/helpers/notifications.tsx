/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

import { Check, X } from 'tabler-icons-react'
import { notifications } from '@mantine/notifications'
export const successNotification = ({ title, message }: any) => {
    notifications.show({
        title: title,
        message: message,
        icon: <Check />,
        autoClose: 5000,
    })
}
export const errorNotification = ({ title, message }: any) => {
    notifications.show({
        title: title,
        message: message,
        autoClose: 5000,
        icon: <X />,
        color: 'red',
    })
}
