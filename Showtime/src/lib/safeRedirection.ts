const allowedDomains = ['github.com'];

function isValidRedirect(url: string): boolean {
    try {
        const parsedUrl = new URL(url);
        return allowedDomains.includes(parsedUrl.hostname);
    } catch (e) {
        return false;
    }
}

export function redirectTo(url: string): void {
    if (isValidRedirect(url)) {
        window.location.href = url;
    } else {
        console.error('Invalid redirect URL');
    }
}