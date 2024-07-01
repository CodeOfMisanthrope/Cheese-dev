import {defaultConfigNet} from "~core/net/config";

export default async function isOnline(
	errorCallback?: Function,
	successCallback?: Function
): Promise<boolean | null> {
	if (
		(defaultConfigNet.checkUrl == null) ||
		(defaultConfigNet.checkInterval == null) ||
		(defaultConfigNet.timeout == null) ||
		(defaultConfigNet.retryCount == null)
	) {
		return null;
	}

	const
		url = defaultConfigNet.checkUrl,
		checkInterval = defaultConfigNet.checkInterval,
		timeout = defaultConfigNet.timeout;

	return new Promise((resolve, reject) => {
		let
			retryCount = 0;

		let
			timer: ReturnType<typeof setTimeout>;

		const
			controller = new AbortController(),
			{signal} = controller;

		checkOnline();

		function checkOnline() {
			const timerReq = setTimeout(() => {
				controller.abort();
				console.log("Abort")
				// if (errorCallback) {
				// 	errorCallback();
				// }

				retry();
			}, timeout);

			fetch(url, {
				mode: "no-cors",
				signal
			})
				.then((data) => {
					if (timer != null) {
						clearTimeout(timer);
					}

					clearTimeout(timerReq);

					if (successCallback) {
						successCallback();
					}

					resolve(true);

				})
				.catch((err) => {
					console.log("Catch")
					if (errorCallback) {
						errorCallback();
					}

					clearTimeout(timerReq);
					retry();
				});
		}

		function retry() {
			console.log(retryCount)
			if (
				defaultConfigNet.retryCount == null ||
				retryCount++ >= defaultConfigNet.retryCount
			) {
				reject(false);

			} else {
				timer = setTimeout(() => {
					clearTimeout(timer);
					checkOnline();
				}, checkInterval);
			}
		}
	});
};
