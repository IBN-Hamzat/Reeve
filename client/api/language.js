import fetch from "common/fetch";

// Change User Language
export function changeUserLanguage(body) {
	return fetch.perform("/api/change_user_language/", {
		method: "POST",
		body: JSON.stringify({
			language: body.language
		})
	});
}
