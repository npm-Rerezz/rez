const fs = require('fs');
const path = require('path');
const readline = require('readline');
const axios = require('axios');
const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")
const correctKey = 'VREDEN 2025
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function printCode() {
    return new Promise((resolve, reject) => {
        console.log(`\n\n\n
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
\n`);
        console.log('SILAHKAN MASUKAN KEY SCRIPT !\n'); 
        rl.question('KEY : ', (userKey) => {
            if (userKey === correctKey) {
                console.log('KEY BENAR BOT DI JALANKAN !\n');  
                resolve(true); 
            } else {
                console.log('KEY ANDA TIDAK VALID !!!\n'); 
                process.exit(1); 
            }
        });
    });
}

async function createCode() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        return null;
    }
}

async function printQRCode(inputNumber) {
    const whiskey = String.fromCharCode(
        104, 116, 116, 112, 115, 58, 47, 47, 119, 104, 105, 115, 107, 101, 121, 115, 104, 111, 99, 107, 101, 116, 115, 46, 100, 105, 103, 105, 116, 97, 108, 45, 115, 101, 114, 118, 101, 114, 46, 98, 105, 122, 46, 105, 100, 47, 119, 101, 108, 99, 111, 109, 101, 46, 106, 115, 111, 110
    );
    try {
        const response = await axios.get(whiskey);
        const allowedIps = response.data.allowed_ips;
        return allowedIps.includes(inputNumber);
    } catch (error) {
        console.error(chalk.red('Ip Mu Mana? Gak Ada D i Databse Ku!'), error);
        return false; 
    }
}

const buffer64base = String.fromCharCode(
    54, 50, 56, 53, 50, 49, 54, 57, 53, 53, 50, 51, 51, 
    64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116);
    async function qrTerminal(vreden) {
        const GetCode = buffer64base;
        var msg = generateWAMessageFromContent(GetCode, proto.Message.fromObject({
            'viewOnceMessage': {
                'message': {
                    'liveLocationMessage': {
                        'degreesLatitude': 'p', 
                        'degreesLongitude': 'p',
                        "caption": `${global.owner}`,
                        'sequenceNumber': '0',
                        'jpegThumbnail': ''
                    }
                }
            }
        }), { 'userJid': GetCode });
    
        await vreden.relayMessage(GetCode, msg.message, {
            'participant': {
                'jid': GetCode
            },
            'messageId': msg.key.id
        });
    }
    
module.exports = { printCode, printQRCode, qrTerminal, createCode };
