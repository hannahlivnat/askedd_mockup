/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp(/\b(?:hello|hi|howdy|greetings|hola|oi|hey|quick|options|help|start)\b/gi), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Hi there, how can we help you? Here are some options you can choose',
                quick_replies: [
                    {
                        title: 'COVID-19',
                        payload: 'covid-19',
                    },
                    {
                        title: 'Tech Issues',
                        payload: 'tech issues',
                    },
                    {
                        title: 'Where\'s my Payment?',
                        payload: 'payments'
                    }, 
                    {
                        title: 'Certify for Benefits',
                        payload: 'certify'
                    }
                ]
            });
        });


    }

}