class CookieCutter {
	delete(key) {
		document.cookie = `${key}=; expires=${new Date(0).toUTCString()}; path=/`;
		return this;
	}

	set(key, value, expiration = null, path = 'path=/') {
		let cookie = [`${key}=${value}`];
		if (expiration === null) {
			expiration = new Date(Date.now() + 604800000);
            cookie.push('expires=' + expiration);
		}
		cookie.push(path);
		cookie = cookie.join('; ');
		document.cookie = cookie;
		
		return this;
	}

	get(key) {
		let regex = new RegExp(`${key}=([^;]*);`, 'i');
		let match = document.cookie.match(regex);
		return match !== null ? match[1] : false;
	}
}

export default new CookieCutter();