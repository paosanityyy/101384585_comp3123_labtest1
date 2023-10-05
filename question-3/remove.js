const fs = require('fs');
const path = require('path')

const logsDir = path.join(__dirname, 'Logs')

const removeLogFiles = () => {
    if (fs.existsSync(logsDir)) {
        const logFiles = fs.readdirSync(logsDir);
        logFiles.forEach((file) => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`delete files...${file}`);
        });
        fs.rmdirSync(logsDir);
    }
};

removeLogFiles();