class CookieCutter {
	delete(key) {
		document.cookie = `${key}=; expires=${new Date(0).toUTCString()}; path=/`;
		return `${key}=; expires=${new Date(0).toUTCString()}; path=/`;
	}

	set(key, value, expiration = null, path = 'path=/') {
		let cookie = [`${key}=${value}`];
		if (expiration === null) {
			let date = moment().add('days', 7);
			expiration = date.toDate();
		} else if (expiration) {
			cookie.push('expires=' + expiration);
		}
		cookie.push(path);
		cookie = cookie.join('; ');
		document.cookie = cookie;
		
		return cookie;
	}

	get(key) {
		let regex = new RegExp(`${key}=([^;]*);`, 'i');
		let match = document.cookie.match(regex);
		if (match !== null) {
			return match[1];
		} else {
			return false;
		}
	}
}

export default new CookieCutter();