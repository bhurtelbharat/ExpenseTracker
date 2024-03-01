/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

import React from 'react'
import FacebookLogin from 'react-facebook-login'

const FacebookLoginButton = () => {
    const responseFacebook = (response: any) => {
        // Handle the Facebook login response, e.g., send it to your server for authentication
    }

    return (
        <div>
            <FacebookLogin
                appId="your-app-id" // Replace with your Facebook App ID
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </div>
    )
}

export default FacebookLoginButton
