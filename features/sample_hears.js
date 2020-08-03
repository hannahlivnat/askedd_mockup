/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    //// use a function to match a condition in the message
    //controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
    //    await bot.reply(message, 'Hi! How can we help you? ');
    //});

    //// use a regular expression to match the text of the message
    //controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
    //    await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    //});

    //// match any one of set of mixed patterns like a string, a regular expression
    //controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
    //    await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    //});

    //controller.hears(['greeting', new RegExp(/\b(?:hello|hi|howdy|greetings|hola|oi|hey)\b/gi)], 'message', async(bot, message) => {
    //    await bot.reply(message, 'Hello! How can we help you? You can type "quick" to view your options');
    //})

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'payments', ['message'], async (bot, message) => {
        await bot.reply(message, 'It will take about 10 days to process your certification if you submitted it by mail and/or requested your benefits by check. If it has been more than 10 days ...');
    });

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'tech issues', ['message'], async (bot, message) => {
        await bot.reply(message, 'To get technical help with registration, password resets, EDD Account Numbers, and how to use UI Online : Call 1-833-978-2511 (English and Spanish) from 8 AM to 8 PM pst.');
    });

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'covid-19', ['message'], async (bot, message) => {
        await bot.reply(message, 'The Pandemic Unemployment Assistance is helping unemployed Californians who are not usually eligible for regular unemployment insurance. This includes business owners, self-employed workers, independing contractors, and those with limited work experience. The program includes up to 46 weeks of benefits from February 2 2020 through December26 2020. It launched with up to 39 weeks of benefits, and an extra 7 weeks was recently added.');
    });

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'certify', ['message'], async (bot, message) => {
        await bot.reply(message, 'After your account is set up, you must certify for your benefit payments every two weeks. This tells us if you are still unemployed and eligible to receive payments.');
    });

    controller.hears(new RegExp(/\b(?:certify|certify for benefits|get benefits|certification)\b/gi), 'message', async (bot, message) => {

        await bot.reply(message, {
            text: 'After your account is set up, you must certify for your benefit payments every two weeks. This tells us if you are still unemployed and eligible to receive payments.'
        });
    });

    //controller.hears(new RegExp(/\b(?:payment|where's my payment|where payment|pay|money|missing benefits|didn't get benefits|no benefits|did not get benefits)\b/gi), 'message', async (bot, message) => {

    //    await bot.reply(message, {
    //        text: 'It will take about 10 days to process your certification if you submitted it by mail and/or requested your benefits by check. If it has been more than 10 days ...'
    //    });
    //});

    //controller.hears(new RegExp(/\b(?:site not working|tech issues|tech problems|technical issue|help with site|technical support)\b/gi), 'message', async (bot, message) => {
    //    await bot.reply(message, {
    //        text: 'To get technical help with registration, password resets, EDD Account Numbers, and how to use UI Online : Call 1-833-978-2511 (English and Spanish) from 8 AM to 8 PM pst.'
    //    });
    //});

}

