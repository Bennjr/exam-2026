const bcrypt = require('bcryptjs');
const hash = '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';
(async () => {
    for (const value of ['password', 'password123']) {
        const ok = await bcrypt.compare(value, hash);
        console.log(JSON.stringify({ value, ok }));
    }
})();
