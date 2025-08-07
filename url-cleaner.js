// Clean URL converter - removes .html from links
document.addEventListener('DOMContentLoaded', function() {
    // Find all links that end with .html
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Remove .html extension
        const cleanUrl = href.replace('.html', '');
        link.setAttribute('href', cleanUrl);
    });
    
    console.log('Clean URLs applied to', links.length, 'links');
});