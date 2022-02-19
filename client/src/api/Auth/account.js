// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function account(endpoint, { body, ...customConfig } = {}) {
    const headers = { "Content-Type": "application/json" };

    const config = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    let data;
    try {
        const response = await window.fetch(endpoint, config);
        data = await response.json();
        if (response.ok) {
            // Return a result object similar to Axios
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            };
        }
        throw new Error(response.statusText);
    } catch (err) {
        return Promise.reject(err.message ? err.message : data);
    }
}

account.get = function (endpoint, customConfig = {}) {
    return account(endpoint, { ...customConfig, method: "GET" });
};

account.post = function (endpoint, body, customConfig = {}) {
    return account(endpoint, { ...customConfig, body });
};
