/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('quick'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here are some options you can choose',
                quick_replies: [
                    {
                        title: 'Payments',
                        payload: 'payments',
                    },
                    {
                        title: 'Help',
                        payload: 'help',
                    }
                ]
            });
        });


    }

}