export function getFileTypeColor(fileName) {
    if (!fileName || typeof fileName !== 'string') return '#cccccc';

    const ext = fileName.split('.').pop().toLowerCase();

    const colorMap = {
        'pdf': '#e74c3c',
        'doc': '#2980b9',
        'docx': '#2980b9',
        'xls': '#27ae60',
        'xlsx': '#27ae60',
        'ppt': '#e67e22',
        'pptx': '#e67e22',
        'jpg': '#f1c40f',
        'jpeg': '#f1c40f',
        'png': '#16a085',
        'gif': '#9b59b6',
        'txt': '#7f8c8d',
        'zip': '#34495e',
        'rar': '#34495e',
        'csv': '#2ecc71',
        'mp3': '#8e44ad',
        'mp4': '#c0392b',
        'avi': '#d35400',
        'mov': '#16a085',
        'json': '#27ae60',
        'js': '#f7df1e',
        'html': '#e67e22',
        'css': '#2980b9',
        // Add more as needed
    };

    return colorMap[ext] || '#cccccc';
}