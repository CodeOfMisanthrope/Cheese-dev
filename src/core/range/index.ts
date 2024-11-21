import { RangeType, RangeVal } from "~core/range/interfaces";

export function range(
	start: RangeVal,
	end?: RangeVal,
): IterableIterator<number> {
	let i = typeof start === "number" ? start : start.charCodeAt(0);
	console.log(i);
	// let i = start;

	if (end) {
		return {
			next() {
				if (i <= end) {
					return {
						value: i++,
						done: false,
					};
				}

				return {
					value: null,
					done: true,
				};
			},

			[Symbol.iterator]() {
				return this;
			},
		};
	}

	return {
		next() {
			return {
				value: i++,
				done: false,
			};
		},

		[Symbol.iterator]() {
			return this;
		},
	};
}

export class Range {
	protected start: number;
	protected end: number;
	protected type: RangeVal;

	constructor(start: RangeType, end?: RangeType) {
		if (end && typeof start !== typeof end) {
			throw new TypeError("");
		}

		this.type = typeof start === "number" ? "number" : "string";
		this.start = typeof start === "number" ? start : start.charCodeAt(0);
		this.end =
			(typeof end === "number" ? end : end?.charCodeAt(0)) ?? Infinity;
	}

	[Symbol.iterator]() {
		let i = this.start;
		const that = this;

		if (this.type === "number") {
			return {
				next() {
					if (i <= that.end) {
						return {
							value: i++,
							done: false,
						};
					}

					return {
						value: null,
						done: true,
					};
				},

				[Symbol.iterator]() {
					return this;
				},
			};
		} else {
			return {
				next() {
					if (i <= that.end) {
						return {
							value: String.fromCharCode(i++),
							done: false,
						};
					}

					return {
						value: null,
						done: true,
					};
				},

				[Symbol.iterator]() {
					return this;
				},
			};
		}
	}
}
