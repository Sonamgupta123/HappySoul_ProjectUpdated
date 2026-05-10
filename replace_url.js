const fs = require('fs');
const path = require('path');

const targetUrl = 'https://happysoul-backend.onrender.com';

function replaceUrl(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const newContent = content.replace(/http:\/\/localhost:3001/g, targetUrl);
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'build') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            replaceUrl(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'ui', 'src'));
