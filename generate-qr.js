import qrcode from 'qrcode-terminal';
import os from 'os';

// Автоматическое определение локального IP
const interfaces = os.networkInterfaces();
let ip = '127.0.0.1';
for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
            ip = iface.address;
            break;
        }
    }
}

const port = 5173; // порт Vite
const url = `http://${ip}:${port}`;

qrcode.generate(url, { small: true });
console.log(`\nСканируй QR-код: ${url}\n`);
